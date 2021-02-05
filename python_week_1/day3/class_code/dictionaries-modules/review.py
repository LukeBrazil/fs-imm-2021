# REVIEW 

# PALINDROME 

# 1. Take user input 
# 2. Run a loop and print individual characters in that order 
# 3. Run a loop and print individual characters in reverse order 
# 4. Make sure to form a reverse string at the end of the loop 
# 5. Compare reverse string to original string 

def is_palindrome(word): 

    reversed_word = ""

    for index in range(len(word) -1 , -1, -1): 
        reversed_word += word[index]
    
    return word == reversed_word # result will be True or False 

    #if word == reversed_word: 
    #    return True 
    
    #return False 


word = input("Please enter a word: ")

if is_palindrome(word): # is_palindrome is called here 
    print("PALINDROME")
else: 
    print("NOT PALINDROME")



#reversed_word = ""
#for index in range(len(word) -1 , -1, -1): 
    #reversed_word = reversed_word + word[index] #  
#    reversed_word += word[index]
#if word == reversed_word:
#    print("PALINDROME")
#else:
#    print("Not a palindrome")




# FACTORIAL 

# 5 = 5 x 4 x 3 x 2 x 1 = 120 
# 5 = 1 x 2 x 3 x 4 x 5 = 120 
result = 1
number = int(input("Please enter a number: ")) # 5 
for index in range(1, number + 1):
    result = result * index 

print(result)