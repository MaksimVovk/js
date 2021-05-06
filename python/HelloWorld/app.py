import sys

# Pypi and Pip

sys.exit()
# Working with Directories
from pathlib import Path

path = Path()
for file in path.glob('*.py'):
  print(file)

sys.exit()

path = Path("emails")
print(path.mkdir())
print(path.exists())
print(path.rmdir())
sys.exit()
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
