import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def email(recipient, subject, body):
    # Email configuration
    sender_email = "halfstackdevs@gmail.com"
    receiver_email = recipient
    password = "123456789QwErTyUiOp0987654321!@#$"

    # Create message container
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = subject

    # Email body
    body = body
    msg.attach(MIMEText(body, 'plain'))

    # Establish a connection to the SMTP server
    with smtplib.SMTP_SSL('smtp.example.com', 465) as server:
        server.login(sender_email, password)
        server.send_message(msg)
