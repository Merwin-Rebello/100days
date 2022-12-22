#python program to convert celsius into fahrenheit

# celsius =37.5
# #calculate fahrenheit
# fahrenheit=(celsius*1.8)+32
# print('0.1f degree celsius is equal to %0.1f degree farenheit' % (celsius,fahrenheit))

# Python program to check if the number is an Armstrong number or not

# take input from the user
num = int(input("Enter a number: "))

# initialize sum
sum = 0

# find the sum of the cube of each digit
temp = num
while temp > 0:
   digit = temp % 10
   sum += digit ** 3
   temp //= 10

# display the result
if num == sum:
   print(num,"is an Armstrong number")
else:
   print(num,"is not an Armstrong number")