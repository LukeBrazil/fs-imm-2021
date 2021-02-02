first_number = int(input('Please enter a number: '))
operand = input('Please enter *, +, -, or / :  ')
second_number = int(input('Please enter a number: '))

def calculate():
    if operand == '+':
        result =  first_number + second_number
    elif operand == '-':
        result = first_number - second_number
    elif operand == '*':
        result = first_number * second_number
    elif operand == '/':
        result = first_number / second_number
    else:
        print('idk what just happened')
        
    print(f"Result: {result}")

    
calculate()