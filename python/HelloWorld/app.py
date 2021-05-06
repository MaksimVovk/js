# Generating Random Values
import random

members = ['John', 'Mary', 'Bob', 'Mash']

leader = random.choice(members)
# print(leader)

class Dice:
  def __init__(self, numbers):
    self.numbers = numbers


  def roll(self):
    print(f'({random.choice(self.numbers)}, {random.choice(self.numbers)})')

numbers = [1,2,4,5]

newDice = Dice(numbers)

newDice.roll()

