
tasks = []

while True: 

    name = input("Enter name of your task: ")
    priority = input("Enter priority: ")

    task = {"name": name, "priority": priority}

    tasks.append(task)

    choice = input("Enter q to quit or any key to continue: ")
    if choice == "q": 
        break 

print(tasks)


