import sys
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

