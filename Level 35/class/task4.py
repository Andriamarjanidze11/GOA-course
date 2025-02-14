def search(text, word):
    if word in text:
        return "Word found"
    else:
        return "Word not found"

text = input('Enter a sentance: ')
word = input('Enter a word to find: ')

print(search(text, word))
