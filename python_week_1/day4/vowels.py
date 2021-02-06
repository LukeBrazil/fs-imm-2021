vowels = ['a', 'e', 'i', 'o', 'u']
word = input('Enter a word: ')
vowel_count = 0
for i in range(0, len(word)):
    if word[i] in vowels:
        vowel_count += 1


print(vowel_count)
