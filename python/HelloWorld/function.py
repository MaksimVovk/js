import sys
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
