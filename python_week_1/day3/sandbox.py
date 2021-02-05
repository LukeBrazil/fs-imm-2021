task = {}

while True: 

    
    choice = input("Enter 1 to add a task, 2 to delete a task, 3 to view tasks, or q to quit: ")
    if choice == "1":
        name = input("Enter name of your task: ")
        priority = input("Enter priority: ")
        task[name]=priority
    elif choice == "2":
        for key in task.keys():
            print(key)
        deletetask = input("Please enter the name of the task you would like to delete:")
        del task[deletetask]
    elif choice == "3":
        for key, value in task.items():
            print(key, " ", value)

    elif choice == "q": 
        break
