from flask import Flask, request
import sqlite3

app = Flask(__name__)


@app.route('/submit-form', methods=['POST'])
def handle_data():
    first_name = request.form['firstname']
    email = request.form['email']
    print(f"Name: {first_name}, Email: {email}")
    # Add database interaction here
    return 'Data received'

if __name__ == '__main__':
    sqliteConnection = sqlite3.connect('../../DB/COP_Sustainability.db')
    cursor = sqliteConnection.cursor()

    app.run(debug=True)
    sqliteConnection.close()
