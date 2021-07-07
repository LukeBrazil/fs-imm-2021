def add(first_number, second_number):
    return first_number + second_number


def subtract(first_number, second_number):
    return first_number - second_number


def multiply(first_number, second_number):
    return first_number * second_number


def divide(first_number, second_number):
    return first_number / second_number


def calculate():
    is_running = True
    while(is_running):
        choice = input('Run Calculator? Type yes or no: ')
        if(choice.lower() == 'yes'):
            first_number = int(input('Please enter a number: '))
            operand = input('Please enter *, +, -, or / :  ')
            second_number = int(input('Please enter a number: '))
            if operand == '+':
                result = add(first_number, second_number)
                print(f"Result: {result}")
            elif operand == '-':
                result = subtract(first_number, second_number)
                print(f"Result: {result}")
            elif operand == '*':
                result = multiply(first_number, second_number)
                print(f"Result: {result}")
            elif operand == '/':
                result = divide(first_number, second_number)
                print(f"Result: {result}")
            else:
                print('Invalid input please try again!')
        else:
            is_running = False
            print('Thanks for using my ghetto calculator!')


if __name__ == "__main__":
    calculate()
