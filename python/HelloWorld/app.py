import sys

# Unpacking
coordinates = (1, 2, 3)

x, y, z = coordinates

print(x, y, z)
sys.exit()
# Tuples
# immutable list
numbers = (1, 2, 3)
numbers[0] = 20
print(numbers[0])
sys.exit()
# List Methods exercise
numbers = [1, 2, 3, 4, 4, 4, 5, 4, 3]
numbers2 = []
for number in numbers:
    if number not in numbers2:
        numbers2.append(number)
print(numbers2)
sys.exit()
# List Methods

numbers = [5, 2, 1, 7, 7, 4]
numbers.append(20)
print('append', numbers)
numbers.insert(0, 10)
print('insert', numbers)
numbers.remove(5)
print('remove', numbers)
# numbers.clear()
# print('clear', numbers)
numbers.pop()
print('pop', numbers)
print('index of element', numbers.index(1))
print('50 in numbers', 50 in numbers)
print('count of number 7:', numbers.count(7))
numbers.sort()
print('sort list', numbers)
numbers.reverse()
print('reverse list', numbers)
numbers2 = numbers.copy()
print('copy list', numbers2)
sys.exit()
# 2D Lists
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for row in matrix:
    for item in row:
        print(item)
sys.exit()

# List
numbers = [1, 2, 3, 10, 4, 5]
max_number = numbers[0]

for number in numbers:
    if number > max_number:
        max_number = number

print(max_number)
sys.exit()
# Nested Loops exercise
for k in range(1):
    for i in range(2):
        for j in range(1):
            print('xxxxx')
        print('xx')
    print('xx')

for i in [5, 2, 5, 2, 2]:
    print('x' * i)
sys.exit()
# Nested Loops
for x in range(4):
    for y in range(3):
        print(f'({x}, {y})')
sys.exit()
# For Loops
prices = [10, 20, 30]
sum = 0
for price in prices:
    sum = sum + price
print('Total: ', sum)
for item in range(10, 20, 3):
    print('range 10 - 20 with step 3', item)

# range(10), range(10, 20)
for item in range(10, 20):
    print('range 10 - 20', item)

for item in ['Max', 'Lena', 'Alex']:
    print(item)
sys.exit()
# Building the Car Game
is_end = False
current_command = 'stop'
while not is_end:
    command = input('>').lower()
    if command == 'help':
        print("""
start - to start the car
stop - to stop the car
quit - to exit
        """)
    elif command == 'start':
        if current_command == command:
            print('The car is already started')
        else:
            current_command = command
            print('Car started...Ready to go')
    elif command == 'stop':
        if current_command == command:
            print('The car is already stopped')
        else:
            current_command = command
            print('Car stopped')
    elif command == 'quit':
        is_end = True
    else:
        print('I don\'t understand that...')
sys.exit()
# Building a Guessing Game

num = 9
i = 0
while i < 3:
    input_number = int(input('Guess: '))
    i = i + 1
    if input_number == num:
        print('You win!')
        break
else:
    print('Sorry you failed')
sys.exit()
# While Loops
i = 1
while i <= 5:
    print(i)
    i = i + 1
print('Done')
sys.exit()
# Weight Converter Program

weight = input('Weight: ')
weight_type = input('(L)bs or (K)g: ')

if weight_type.lower() == 'l':
    print(f'Yor are: {float(weight) * 0.45} kilo')
else:
    print(f'You are: {float(weight) / 0.45} pounds')
sys.exit()
# Comparison Operators exercise
name = input('Enter your name ')
message = 'name looks good'

if len(name) < 3:
    message = 'name must be at least 3 characters'
elif len(name) > 50:
    message = 'name can be a maximum of 50 characters'
else:
    message = message

print(message)
sys.exit()
# Comparison Operators
temperature = 30
# >, >=, <, <=, ==, !=
if temperature > 30:
    print("It's a hot day")
else:
    print("It's not a hot day")
sys.exit()
# Logical Operators
has_high_income = True
has_good_credit = True

if has_high_income and has_good_credit:
    print('First: eligible for loan')

has_high_income = False
has_good_credit = True

if has_high_income or has_good_credit:
    print('Second: eligible for loan')

has_good_credit = True
has_criminal_record = False

if has_good_credit and not has_criminal_record:
    print('Third: eligible for loan')
sys.exit()
# If Statements exercise
price = 10 ** 6
has_good_credit = True
discount = 0
if has_good_credit:
    discount = 10
else:
    discount = 20

total_price = (100 - discount) / 100 * price

print(f'Your discount: {discount}, your price: {total_price}')
sys.exit()
# If Statements
is_hot = False
is_cold = True
if is_hot:
    print("It's a hot day")
    print("Drink plenty of watter")
elif is_cold:
    print("It's a cold day")
    print("Wear warm clothes")
else:
    print("It's a lovely day")
print("Enjoy your day")
sys.exit()

# Math Functions
import math
x = 2.9
print(round(x))
print(abs(-x))
print(math.ceil(x))
print(math.floor(x))
sys.exit()
# Operator Precedence
x = 10 + 3 * 2
print(x)
x = 10 + 3 * 2 ** 2
print(x)
x = (10 + 3) * 2 ** 2
print(x)
x = (2 + 3) * 10 - 3
print(x)
sys.exit()

# Arithmetic Operations
print('Addition: 1 + 1 = ', 1 + 1)
print('Subtraction: 2 - 1 = ', 2 - 1)
print('Multiplication: 2 * 2 = ', 2 * 2)
print('Division: 10 / 3 = ', 10 / 3)
print('Floor division: 10 / 3 = ', 10 / 3)
print('Modulus: 10 % 3 = ', 10 % 3)
print('Exponentiation: 10 ** 3 = ', 10 ** 3)
sys.exit()

# String Methods
course = 'Python for Beginners'
print('Length: ', len(course))
print('Tittle: ', course.title())
print('Upper case: ', course.upper())
print('Lower case: ', course.lower())
print('Find index: ', course.find('P'))
print('Find index: ', course.lower().find('p'))
print('Replace: ', course.replace('Beginners', 'Absolute Beginners'))
print('Expression: ', 'Python' in course)
sys.exit()
# Formatted Strings
first = 'Max'
last = 'Vovk'

message = first + ' [' + last + '] is coder'
msg = f'{first} [{last}] is coder'
print(message)
print(msg)
sys.exit()

# Strings
course = "Python for \"Beginners\""
message = '''
Hi Max!

Thank you,
The support team!  
'''
print(message)
print(course)
print('First char - ', course[0])
print('Last char - ', course[-1])
print('Second char from the end - ', course[-2])
print('Char range from 0 to 3 - ', course[0:3])
name = 'Jennifer'
print(name[1:-1])
# Type Conversion
from datetime import date

today = date.today()
YEAR = today.year
year = input('Birth year: ')
print(type(year))
age = YEAR - int(year)
print(type(age))
print('Your age is %d'% age)
# ---------
K = 2.2046
pounds = input('What is your weight? ')
kilo = float(pounds)/K
print('Kilograms: %s' % kilo)

# Receiving Input
name = input('what is your name? ')
color = input('what is your favorite color? ')
print('%s likes %s' % (name, color))

# Variables
name = 'John Smith'
age = 20
isNewPatient = False

# If Statements
if name == 'John Smith':
    print('It is John Smith')
else:
    print('It is not John Smith')

if age == 20:
    print('He is 20 years old')
elif age > 20:
    print('He is older')
else:
    print('He is younger')

if isNewPatient:
    print('He is a new patient')
else:
    print('He is a current patient')

