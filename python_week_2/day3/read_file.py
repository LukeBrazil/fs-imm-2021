
while True:
        with open('dishes.txt', 'a') as file:
            dish = input('Enter your favorite Dish: ')
            if dish != 'q':
                file.write(dish)
                file.write('\n')
            else:
                with open('dishes.txt') as file_content:
                    content = file_content.read()
                    print(content)
                    break
