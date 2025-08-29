from flask import Flask, request, jsonify
import requests
from flask_cors import CORS, cross_origin


app = Flask(__name__)




# declare the urls where servies are runing

BusSchedule_SERVICE_URL = "http://busscheduleservice:5002"
Reservation_SERVICE_URL = "http://reservationservice:5001"
Userlogin_SERVICE_URL = "http://userloginservice:5003"

CORS(app, origins=["http://localhost:4200"])

@app.route("/api/bus", methods=['GET','POST'])
def Buses():
    if request.method == 'GET':
        response = requests.get(f"{BusSchedule_SERVICE_URL}/bus")
    else:
        response = requests.post(f"{BusSchedule_SERVICE_URL}/bus", json = request.json)      
    return jsonify(response.json()), response.status_code


@app.route("/api/bus/<int:bus_id>", methods=["GET"]) 
def get_bus(bus_id): 
    response = requests.get(f"{BusSchedule_SERVICE_URL}/bus/{bus_id}") 
    return jsonify(response.json()), response.status_code 


@app.route("/api/bus/<int:bus_id>", methods=["PUT"])
def update_bus(bus_id):
    response = requests.put(f"{BusSchedule_SERVICE_URL}/bus/{bus_id}",json=request.json)
    return jsonify(response.json()), response.status_code


@app.route("/api/tickets", methods=['GET','POST'])
def Tickets():
    if request.method == 'GET':
        response = requests.get(f"{Reservation_SERVICE_URL}/book_tickets")
    else:
        response = requests.post(f"{Reservation_SERVICE_URL}/book_tickets", json = request.json)
    return jsonify(response.json()), response.status_code


@app.route("/api/tickets/<int:ticket_id>", methods=["GET"]) 
def get_ticket_byid(ticket_id): 
    response = requests.get(f"{Reservation_SERVICE_URL}/book_tickets/{ticket_id}") 
    return jsonify(response.json()), response.status_code 


@app.route("/api/tickets/<int:ticket_id>", methods=["DELETE"]) 
def delete_ticket(ticket_id): 
    response = requests.delete(f"{Reservation_SERVICE_URL}/book_tickets/{ticket_id}") 
    return jsonify(response.json()), response.status_code 



@app.route("/api/userlogin", methods=['GET','POST'])
def Users():
    if request.method == 'GET':
        response = requests.get(f"{Userlogin_SERVICE_URL}/userlogin")
    else:
        response = requests.post(f"{Userlogin_SERVICE_URL}/userlogin", json = request.json)
    return jsonify(response.json()), response.status_code


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)
    CORS(app, origins=["http://localhost:4200"])
    
   
    
    