age = int(input())

if age < 13:
    print('underaged')
elif age > 13 and age < 19:
    print('teenager')
elif age > 20:
    print('adult')