def count_positives_sum_negatives(arr):
    if arr < 0:
        arr.count(arr > 0)
        return arr
    elif arr < 0:
        return arr+arr