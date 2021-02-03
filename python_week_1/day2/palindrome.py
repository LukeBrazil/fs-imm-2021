def reverseString(x):
    return x[::-1]

textInput = input('Please type in a string:  ')
newString = reverseString(textInput)
print(f"Orignal Text: {textInput}")
print(f"Reversed Text: {newString}")

def isPalindrome(textInput, newString):
    if textInput == newString:
        print(f'Yes this is a palindrome!!!')
        return True

    else:
        print('This is not a palindrome.')
        return False


isPalindrome(textInput, newString)