number = int(input('enter a number 1-10: '))

while number == 7:
    print('you are right!')
    break
if number >= 1 and number <= 6:
    print('you are wrong!')
    number = int(input('enter a number 1-10: '))
elif number >= 8 and number <= 10:
    print('you are wrong!')
    number = int(input('enter a number 1-10: '))

