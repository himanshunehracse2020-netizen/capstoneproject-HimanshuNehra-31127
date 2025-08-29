from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Seat_Reservation(db.Model):
    ticket_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    passenger_name = db.Column(db.String(50), nullable=False)
    passenger_age = db.Column(db.Integer, nullable=False)
    book_seat = db.Column(db.Integer)
    email=db.Column(db.String(50), nullable=False)
    phone = db.Column(db.Integer)
    gender = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    bus_id = db.Column(db.Integer)