from flask import Flask, request

app = Flask(__name__)

@app.route('/submit-form', methods=['POST'])
def handle_data():
    first_name = request.form['firstname']
    email = request.form['email']
    print(f"Name: {first_name}, Email: {email}")
    # Add database interaction here
    return 'Data received'

if __name__ == '__main__':
    app.run(debug=True)
