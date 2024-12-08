"""დავალება: მომხმარებლის რიცხვების სიის შექმნა და დამუშავება
შექმენით პროგრამა, რომელიც შემდეგ ნაბიჯებს შეასრულებს:

მომხმარებლისგან მოითხოვეთ რიცხვების შეყვანა (input()), თითო რიცხვი თითო შეყვანაზე.

შეყვანილი რიცხვები შეინახეთ სიაში user_numbers.

შეყვანა უნდა გაგრძელდეს მანამ, სანამ მომხმარებელი არ შეიყვანს ცარიელ ხაზს (ანუ უბრალოდ დააჭერს Enter-ს).

სიის შექმნის შემდეგ, პროგრამამ უნდა შეამოწმოს:

თუ სიაში არსებობს რიცხვი, რომელიც 10-ზე მეტია, დაბეჭდოს შეტყობინება: "სიაში არის 10-ზე მეტი რიცხვი".

წინააღმდეგ შემთხვევაში, დაბეჭდოს შეტყობინება: "სიაში 10-ზე მეტი რიცხვი არ არის".

ბოლოს, დაბეჭდეთ სია და სიის ელემენტების ჯამი."""

user_numbers = []

number = input("Please enter a number: ")
while number != "":
    number = input("Please enter a number: ")
    if number.isdigit():
        user_numbers.append(number)

sum = 0
greater_ten = False
for number in user_numbers:
    sum += int(number)
    if int(number) > 10:
        greater_ten = True

if greater_ten:
    print("There is number greater then 10 in the list")
else:
    print("There isn't number greater then 10")


print(user_numbers)