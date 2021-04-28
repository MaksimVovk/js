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

