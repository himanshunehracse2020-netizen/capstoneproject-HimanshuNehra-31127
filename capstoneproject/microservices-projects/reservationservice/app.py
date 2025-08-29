from flask import Flask, request, jsonify
from models import db, Seat_Reservation
import requests
from flask_cors import CORS, cross_origin


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///capstoneproject_Reservation.db'
db.init_app(app)



@app.before_request
def create_table():
    db.create_all()

CORS(app, origins=["http://localhost:4200"])

@app.route('/book_tickets', methods=['POST'])
def book_ticket():
    data = request.json  
    bus_id = data['bus_id']
    book_seat = data['book_seat']  
    passengers = data['passengers']  

   
    bus_data = requests.get("http://localhost:5002/bus")
    buses = bus_data.json()
    bus = next((b for b in buses if b['bus_id'] == bus_id), None)

    if not bus or bus['seats'] < book_seat:
        return jsonify({"error": "Not enough seats available"}), 400

    if len(passengers) != book_seat:
        return jsonify({"error": "Passenger count must match booked seats"}), 400

   
    for passenger in passengers:
        new_ticket = Seat_Reservation(
            passenger_name=passenger['passenger_name'],
            passenger_age=passenger['passenger_age'],
            book_seat=1,   
            bus_id=bus_id,
            email=passenger['email'],
            phone=passenger['phone'],
            gender=passenger['gender'],
            address=passenger['address']
        )
        db.session.add(new_ticket)

    db.session.commit()

    
    requests.put(f"http://localhost:5002/busseat/{bus_id}", 
                 json={"seats": bus['seats'] - book_seat})
    
    return jsonify({"message": f"{book_seat} tickets booked successfully"}), 201




@app.route('/book_tickets', methods=['GET'])
def get_tickets():
    tickets = Seat_Reservation.query.all()

    result = []
    for t in tickets:
        result.append({
            "ticket_id": t.ticket_id,
            "bus_id": t.bus_id,
            "passenger_name": t.passenger_name,
            "passenger_age": t.passenger_age,
            "email": t.email,
            "phone": t.phone,
            "gender": t.gender,
            "address": t.address,
            "book_seat": t.book_seat  # will always be 1 per row
        })

    return jsonify(result), 200


@app.route('/book_tickets/<int:ticket_id>',methods=['delete'])
def cancel_ticket(ticket_id):
    ticket=Seat_Reservation.query.get(ticket_id)


    if not ticket:
        return jsonify({'message':'ticket not found'}),404

    bus_data = requests.get(f"http://localhost:5002/bus")

    buses=bus_data.json()
    bus = next((b for b in buses if b['bus_id']== ticket.bus_id),None)

    if not bus:
        return jsonify({"error":"Bus not found"}),404

    db.session.delete(ticket)     

    requests.put(f"http://localhost:5002/busseat/{ticket.bus_id}",
                     json={"seats":bus["seats"]+ticket.book_seat})


    db.session.commit()
    return jsonify({'message':'ticket Cancelled Successfully'})



@app.route('/book_tickets/<int:ticket_id>', methods=['GET'])
def get_ticket(ticket_id):
    ticket = Seat_Reservation.query.get(ticket_id)
    if not ticket:
        return jsonify({'message': 'Ticket not found'}), 404

    return jsonify({
        "ticket_id": ticket.ticket_id,
        "passenger_name": ticket.passenger_name,
        "passenger_age": ticket.passenger_age,
        "email": ticket.email,
        "phone": ticket.phone,
        "gender": ticket.gender,
        "address": ticket.address,
        "book_seat": ticket.book_seat,
        "bus_id": ticket.bus_id
        })
    

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5001,debug=True)
    CORS(app, origins=["http://localhost:4200"])