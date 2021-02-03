def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
n=int(input("Input a number to compute the factiorial : "))
print(factorial(n))


number = int(input("Enter number: "))
factorial = 1
for index in range(1,number + 1): 
    factorial *= index 
print(factorial)