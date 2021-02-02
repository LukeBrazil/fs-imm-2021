number = int(input('Please enter a number: '))

def fizzBuzz(number):
    if number % 3 == 0 & number % 5 == 0:
        print('FizzBuzz')
    elif number % 3 == 0:
        print('Fizz')
    elif number % 5 == 0:
        print('Buzz')
    else:
        print(f'Number does not fit requirements: {number}')

fizzBuzz(number)