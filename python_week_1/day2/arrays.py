for i in reversed(range(5)):
    print(i)


# Activity 1

names = ['alex', 'tom', 'henry']

for i in names:
    print(i)

# Activity 2

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for i in range(len(numbers) - 1, -1, -1):
    print(numbers[i])

numbers.reverse()

print(numbers)


# Activity 3

def reverseString(x):
    return x[::-1]

textInput = input('Please type in a string:  ')
textInput = reverseString(textInput)
print(textInput)

#Activity 4

friends = []

while True:
    friend = input('Please enter a friends name or press q to quit')
    if friend == 'q':
        break
    else:
        friends.append(friend)
        print(friends)