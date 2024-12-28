def simple_calculator(num1, num2, operation):
    if operation == "plus":
        return num1 + num2
    elif operation == "minus":
        return num1 - num2
    elif operation == "multiply":
        return num1 * num2
    elif operation == "divide":
        if num2 == 0:
            return "error: it's impossible to divide with 0."
        else:
            return num1 / num2
    else:
        return "error: invalid operation"

print(simple_calculator(10, 5, "plus")) 
print(simple_calculator(10, 5, "minus"))
print(simple_calculator(10, 5, "multiply"))
print(simple_calculator(10, 5, "divide"))
print(simple_calculator(10, 0, "divide"))
