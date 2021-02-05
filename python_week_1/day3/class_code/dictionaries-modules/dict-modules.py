
# DICTIONARIES 

airport_code = "IAH"
airport_name = "Intercontinental Airport"

# Dictionary = {Key: Value}

# creating a dictionary 
airport = {"IAH": "Intercontinental Airport" }

# access value from a dictionary 

name = airport["IAH"]

print(name)

# Car -- make and model 

car = {"make": "Honda", "model": "Accord", "noOfCylinders": 4, "isElectric": False}

print(car["model"]) 

# empty dictionary 
user = {}

user["first_name"] = "John"
user["last_name"] = "Doe"
user["middle_name"] = ""

print(user["middle_name"]) 

print(user)

# ACTIVITY 1 

first_name = input("Enter first name: ")
last_name = input("Enter last name: ")
#street = input("Enter street: ")
#city = input("Enter city: ")

home_address = {"street": "1200 Richmond Ave", "city": "Houston"}
vacation_home_address = {"street": "5533 Stiener Ranch", "city": "Austin"}

# array containing two addresses (array of dictionaries)
addresses = [home_address, vacation_home_address]

user = {"first_name": first_name, "last_name": last_name, "addresses": addresses}

#print("My name is " + user["first_name"] + " " + user["last_name"])

#print(f"My name is {user['first_name']}, {user['last_name']}")

print(user)


reviews = [{"title": "Good product", "rating": 5},{"title": "OK product", "rating": 3},{"title": "Great product", "rating": 4}]

product = {"title": "iPhone 12 Plus", "brand": "Apple", "color": "RED", "reviews": reviews}



# ACTIVITY NESTED JSON STRUCTURE 





bank_user = {
    "id": 1, 
    "name": "Leanne Graham", 
    "username": "Bret", 
    "email": "Sincere@april.biz", 
    "address": {
        "street": "Kulas Light", 
        "zipcode": "92998-3874", 
        "geo": {
            "lat": "-37", 
            "lng": "81.0"
        }
    },
    "phone": "1-770-736-8031 x56442" 
}

# ITERATING THROUGH THE DICTIONARY 
print("ITERATING OVER bank_user DICTIONARY")

print("OPTION 1")
# OPTION 1 
for key in bank_user: 
    print(bank_user[key])

print("OPTION 2")
# OPTION 2 
for value in bank_user.values(): 
    print(value)

# OPTION 3
print("OPTION 3")

for key, value in bank_user.items(): 
    print(key)
    print(value)

# DELETING FROM A DICTIONARY 
print("DELETING FROM A DICTIONARY")

electric_car = {"make": "TESLA", "model": "Model S"}
print(electric_car)

del electric_car["model"]
print(electric_car)





