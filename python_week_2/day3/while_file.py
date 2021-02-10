file = open('programming_likes.txt', 'a')

while True:
    likes = input('Why do you like programming? ')
    if likes != 'q':
        file.write(likes)
        file.write('\n')
    else:
        file.close()
        break