#დაწერეთ პროგრამა, რომელიც მომხარებელს შემოატანინებს წელს და გაიგებს არის თუ არა ის ნაკიანი(წელი როდესაც თებერვალში 29 დღე გვაქვს). ნაკიანი არის წელი თუ ის იყოფა 4-ზე და არ იყოფა 100-ზე ან იყოფა 400-ზე.(გამოიყენეთ and და or ოპერატორები)

year = int(input('Please enter your year: '))

if year % 400 == 0:
    print('Year is leap')
elif year % 4 == 0 and year % 100 != 0:
    print('Year is leap')
else:
    print('Year is not leap')
