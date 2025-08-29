from flask import Flask, request, jsonify
from models import db, User
from flask_cors import CORS, cross_origin

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///userlogin.db'
db.init_app(app)
CORS(app, origins=["http://localhost:4200"])


@app.before_request
def create_table():
    db.create_all()



@app.route('/userlogin', methods=['POST'])
def add_movies():
    user = request.json
    new_user = User(username = user['username'], password = user['password'])

    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message':'Movie added'}), 201


@app.route('/userlogin', methods=['GET'])
def get_movies():
    users = User.query.all()
    return jsonify([{'id': u.id, 'username':u.username, 'password':u.password } for u in users ])


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5003,debug=True)
    CORS(app, origins=["http://localhost:4200"])
