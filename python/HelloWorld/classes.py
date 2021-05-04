import sys

class Person:
    def __init__(self, name):
        self.name = name
    
    def talk(self):
        print(f'{self.name} is talk now')

person = Person('Max')
person.talk()
sys.exit()
# Constructors
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def move(self):
        print("Move")

    def draw(self):
        print("Draw")


point = Point(10, 20)
point.x = 11
print(point.x)


sys.exit()
# Classes
class Point:
    def move(self):
        print("Move")

    def draw(self):
        print("Draw")


point1 = Point()
point1.x = 10
point1.y = 20
print(point1.y)
point1.draw()
