import math

number = int(input('Enter a number: '))

root = math.sqrt(number)

if int(root + 0.5) ** 2 == number:
    print(f'{number} is a perfect square!')
else:
    print(f'{number} is not a perfect square')
