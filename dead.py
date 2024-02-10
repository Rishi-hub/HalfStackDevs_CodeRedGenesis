import random
import string

def generate_password(length):
    """Generate a random password."""
    # Define possible characters for the password
    characters = string.ascii_letters + string.digits + string.punctuation
    # Generate a random password
    password = ''.join(random.choice(characters) for i in range(length))
    return password

def main():
    # Ask the user for the password length
    length = int(input("Enter the desired length of the password: "))
    # Generate and print the password
    password = generate_password(length)
    print(f"Your random password is: {password}")

if __name__ == "__main__":
    main()
