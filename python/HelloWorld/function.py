import sys
# Exceptions
try:
    age = int(input('Age: '))
    income = 2000
    risk = income/age
    print(age)
except ZeroDivisionError:
    print('Age cannot be 0')
except ValueError:
    print('Invalid value')


sys.exit()
# Return Statement
def square(number):
    return number * number


result = square(4)
print(result)
sys.exit()

# functions
def greet_user(first_name="Gomer", last_name="Simpson"):
    print(f'Hi there {first_name} {last_name}')
    print('Welcome aboard')


print('Start')
greet_user()
greet_user(first_name="John", last_name='Smith')
print('Finish')
