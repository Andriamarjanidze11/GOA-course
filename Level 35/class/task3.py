weight = float(input("Weight in kg: "))
height = float(input("Height in meters: "))
bmi = weight / (height * 2)

if bmi < 18.5:
    category = "Underweight"
elif bmi < 25:
    category = "Normal weight"
elif bmi < 30:
    category = "Overweight"
else:
    category = "Obese"

print("Your BMI is: %.2f" % bmi)
print("Category: " + category)

