number = 65 #გამოსაცნობი რიცხვი

attempts = 3 #ციკლის გამეორებების ცვლადი რომელიც იგივეა რაც მომხმარებლის გამოცნობების რაოდენობა

guess = -1 #ცვლადი რომელშიც შეინახება მომხმარებლის მიერ გამოცნობილი რიცხვი

while attempts != 0:
    guess = int(input('Enter a number between 1-100: '))

    if guess > number:
        print('მაღალი')
    elif guess < number:
        print('დაბალი')
        
    attempts -= 1
    if guess == number:
        break


if number == guess:
    print('გამოიცანი!')
else:
    print('ვერ გამოიცანი!')
