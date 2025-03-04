#Given a non-empty array of integers, return the result of multiplying the values together in order.

def grow(arr):
    count = 1
    for i in arr:
        count = count * i
    return count