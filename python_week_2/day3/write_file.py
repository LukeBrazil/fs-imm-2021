file = open('guest.txt', 'w')

name = input('Enter your name: ')

file.write(name)
file.close()