for i in reversed(range(5)):
    print(i)

names = ['alex', 'tom', 'henry']

for i in names:
    print(i)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.reverse()

print(numbers)

for i in reversed(numbers):
    print(i)

def reverseString(x):
    return x[::-1]

textInput = input('Please type in a string:  ')
textInput = reverseString(textInput)
print(textInput)

i = 1
while i < 6:
    print(i)
    i += 1