
class Car: 
    def __init__(self, make, model): 
        self.make = make 
        self.model = model 
        self.color = ""
        self.speed = 0
        self.current_gear = "N"
   
    def change_gear(self,gear):
        self.current_gear = gear

    def drive(self): 
        self.speed = 40 
        # calling change_gear function from within a function 
        self.change_gear("4")

    def accelerate(self):
        self.speed += 5
        #self.speed = self.speed + 5  

    def brake(self): 
        self.speed = 0 

#car.property name # dot notation 
#car.function name # dot notation 

# creating an object of the Car class 
car = Car("Honda", "Accord")
print(car.speed)
# calling drive function on that car object/instance
car.drive() 
print(car.speed)
car.brake() 
print(car.speed)

car.change_gear("1")
car.change_gear("2")
car.change_gear("R")

car.accelerate() 
print(car.speed)
car.accelerate() 
print(car.speed)

class Tree: 
    def __init__(self): 
        self.type = ""
        self.width = ""
        self.height = ""
        self.age = ""

tree = Tree() 
tree.type = "OAK"
tree.width = "10"
