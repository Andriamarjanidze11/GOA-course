# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

def digitize(n):
    if n < 1:
        return [0]
    result = []
    while n >= 1:
        result.append(n%10)
        n //= 10
    return result