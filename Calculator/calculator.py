#Working calculator
first_number = int(input('Enter the first number: '))
second_number = int(input('Enter the second number: '))

print('Choose which operation you want to perform: ')
print('1. ADD')
print('2. MINUS')
print('3. MULTIPLY')
print('4. DEVIDE')

perform = int(input())

if perform == 1:
    print(first_number + second_number)
elif perform == 2:
    print(first_number - second_number)
elif perform == 3:
    print(first_number * second_number)
elif perform == 4:
    print(first_number / second_number)
else:
    print('ERROR! Input the valid number!')