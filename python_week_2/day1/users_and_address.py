addresses = []

class User:
    

    def __init__(self, first_name, last_name, addresses):
        self.first_name = first_name
        self.last_name = last_name
        self.addresses = []
        
    def add_address(self, address):
        self.addresses.append(address)

    
    def display_addresses(self):
        for i in range(0, len(self.addresses)):
            print(self.addresses[i])


class Address:
    def __init__(self, street, city, state, zip_code):
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code



luke = User('Luke', 'Brazil', [])

address1 = Address('123 Ace Trace', 'Houston', 'Texas', 77459)
luke.add_address(address1)

print(luke.display_addresses())

# def display_menu():
#     print("""
#     /// User Menu
#     1. Add New User
#     2. Add Address
#     2. Delete User
#     3. Show Address of User
#     4. Delete Address   
#         """)


# while True:
#     display_menu()
#     choice = input('Select an option: ')
#     if choice == '1':
#         User.add_user()
#     elif choice == '2':
#         User.add_address()
#     elif choice == '3':
#         User.display_addresses()
