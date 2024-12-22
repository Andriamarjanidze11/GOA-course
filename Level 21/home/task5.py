temperatures = [72, 68, 75, 70, 78, 74, 71]

print("Highest temperature:", max(temperatures))

print("Lowest temperature:", min(temperatures))

print("Average temperature:", sum(temperatures) / len(temperatures))

above_70 = [temp for temp in temperatures if temp > 70]
print("Temperatures above 70 degrees:", above_70)


