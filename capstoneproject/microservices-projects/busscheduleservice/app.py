from flask import Flask, request, jsonify
from models import db, Bus_Schedule
from flask_cors import CORS, cross_origin



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///capstoneproject.db'
db.init_app(app)

CORS(app, origins=["http://localhost:4200"])

@app.before_request
def create_table():
    db.create_all()

@app.route('/bus', methods=['POST'])
def add_BusSchedule():
    bus = request.json
    new_Bus_Schedule = Bus_Schedule(start = bus['start'],
                    destination = bus['destination'],image=bus['image'], ratings = bus['ratings'], 
                    departureTime = bus['departureTime'], date = bus['date'],
                    seats=bus['seats'],price=bus['price'])

    db.session.add(new_Bus_Schedule)
    db.session.commit()
    return jsonify({'message':'BusSchedule added'}), 201


@app.route('/bus', methods=['GET'])
def get_BusSchedule():
    Buses = Bus_Schedule.query.all()
    return jsonify([{'bus_id': b.bus_id, 'start':b.start, 
                     'destination':b.destination,'image':b.image, 'ratings':b.ratings,
                     'departureTime':b.departureTime,'date':b.date,
                     'seats':b.seats,'price':b.price } for b in Buses ]),200


@app.route('/busseat/<int:bus_id>',methods=['PUT'])
def update_seats(bus_id):
    data=request.json
    bus=Bus_Schedule.query.get(bus_id)
    if not bus:
        return jsonify({'message':'Bus not found'}),404
    
    bus.seats=data['seats']
    db.session.commit()
    return jsonify({'message':'seats updated'})


@app.route('/bus/<int:bus_id>',methods=['put'])
def update_Bus(bus_id):
    bus=Bus_Schedule.query.get(bus_id)
    if not bus:
        return jsonify({'message':'Movie not found'}),404
    
    data=request.json
    bus.bus_id=data.get('bus_id',bus.bus_id)
    bus.start=data.get('start',bus.start)
    bus.destination = data.get('destination',bus.destination)
    bus.image= data.get('image',bus.image)
    bus.ratings= data.get('ratings',bus.ratings)
    bus.departureTime= data.get('departureTime',bus.departureTime)
    bus.date= data.get('date',bus.date)
    bus.seats= data.get('seats',bus.seats)
    bus.price= data.get('price',bus.price)
    db.session.commit()
    return jsonify ({'message':'Bus details updated'})




@app.route('/bus/<int:bus_id>', methods=['GET'])
def get_BusByID(bus_id):

    Buses = Bus_Schedule.query.filter_by(bus_id=bus_id).all()
    return jsonify([{'bus_id': b.bus_id, 'start':b.start, 
                     'destination':b.destination,'image':b.image, 'ratings':b.ratings,
                     'departureTime':b.departureTime,'date':b.date,
                     'seats':b.seats,'price':b.price} for b in Buses ])


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5002,debug=True)
    CORS(app, origins=["http://localhost:4200"])
    