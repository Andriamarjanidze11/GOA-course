#

def is_even(n): 
    if n % 2 == 0:
        return True
    if n % 3 == 0:
        return False
    elif n // 3 == 0:
        return False
    elif n < 0:
        return False
    elif (n) != int: 
        return False 
    pass