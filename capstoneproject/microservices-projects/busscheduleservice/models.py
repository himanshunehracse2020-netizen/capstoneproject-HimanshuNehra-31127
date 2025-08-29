from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Bus_Schedule(db.Model):
    bus_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    start = db.Column(db.String(50), nullable=False)
    destination = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String, nullable=False)
    ratings = db.Column(db.Integer)
    departureTime = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=False)
    seats = db.Column(db.Integer)
    price=db.Column(db.Integer)
 