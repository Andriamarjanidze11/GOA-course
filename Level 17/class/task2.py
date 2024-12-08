number = str((input('please en-ter a number: ')))

user_numbers = [number]

while number == " ":
    number = str(input('please emter a number: '))

if user_numbers > 10:
    print('სიაში არის 10-ზე მეტი რიცხვი.')

else:
    print('სიაში 10-ზე მეტი რიცხვი არ არის.')