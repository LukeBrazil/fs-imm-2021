amount = int(input('Enter Bill Amount: '))
tip = input('Enter tip percentage: a = 10%, b = 15%, c = 20%, d = 25%:  ')

def calculateTip():
    if tip == 'a':
        result = .10 * amount
    elif tip == 'b':
        result = .15 * amount
    elif tip == 'c':
        result = .20 * amount
    elif tip == 'd':
        result = .25 * amount
    
    total_amount = amount + result
    tip_amount = result
    print(f'The total amount: ${total_amount} and the amount you tipped is ${tip_amount}')

calculateTip()

