users = []

class User:
    addresses = []

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def add_user(self):
        print('Adding New User....')
        first_name = input('First Name: ')
        last_name = input('Last Name: ')
        User(first_name, last_name)

        

    def add_address(self):
        street = input('Please Enter Street Address: ')
        city = input('Please Enter City Name: ')
        state = input('Please Enter State of Residence: ')
        zip_code = input('Please Enter Zip Code: ')
        address = {'Street': street, 'City': city, "State": state, 'Zipcode': zip_code}
        User.addresses.append(address)
    
    def display_addresses(self, addresses):
        for i in range(0, len(addresses)):
            print(addresses[i])


class Address:
    def __init__(self, street, city, state, zip_code):
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code






def display_menu():
    print("""
    /// User Menu
    1. Add New User
    2. Add Address
    2. Delete User
    3. Show Address of User
    4. Delete Address   
        """)


while True:
    display_menu()
    choice = input('Select an option: ')
    if choice == '1':
        User.add_user()
    elif choice == '2':
        User.add_address()
    elif choice == '3':
        User.display_addresses()
