#Given an array of integers.

# Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

# If the input is an empty array or is null, return an empty array.

def count_positives_sum_negatives(arr):
    if len(arr) == 0:
        return []
    else:
        positive, negative = 0, 0
        result = []
        for num in arr:
            if num > 0:
                positive+=1
            else:
                negative+= num
        return [positive, negative]  