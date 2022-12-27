# Program to sort alphabetically the words form a string provided by the user

# my_str = " Me Merwin Rebello is the best of all around here"


my_str = input("Enter a string: ")

# breakdown the string into a list of words
# words = [word.lower() for word in my_str.split()]    all words in lower order
words = [word.upper() for word in my_str.split()] # all words in capital

# sort the list
words.sort()

# display the sorted words

print("The sorted words are:")
for word in words:
   print(word)