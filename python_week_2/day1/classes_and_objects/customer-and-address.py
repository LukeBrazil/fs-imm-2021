
class Customer: 
    def __init__(self, name): 
        self.name = name 
        self.addresses = [] # array to represent addresses 

class Address: 
    def __init__(self, street, city, state, zip_code):
        self.street = street
        self.city = city 
        self.state = state 
        self.zip_code = zip_code

customer = Customer("John Doe")
print(customer.addresses)
address = Address("1200 Richmond", "Houston", "TX", "77989")
another_address = Address("345 Harvin", "Houston", "TX", "77867")
# how to add address to a customer 
customer.addresses.append(address)
customer.addresses.append(another_address)

# display customer and addresses 
print(customer.name)
for address in customer.addresses: 
    print(address.street)
    print(address.state)

#print(customer.addresses)

#customer.street = "1200 Richmond Ave"
#customer.city = "Houston"
#customer.state = "TX"
#customer.zip_code = "77890"

#Post 
#Comment 

#A single Post can have many comments 
#Comment can belong to a Post