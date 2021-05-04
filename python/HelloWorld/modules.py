import converters
from converters import kg_to_lbs

from utils import find_max

from ecommerce.shipping import calc_shipping, calc_tax

calc_shipping()
calc_tax()

numbers = [1, 2, 4, 5, 32, 4, 35, 54]
print(find_max(numbers))
print(kg_to_lbs(70))
print(converters.kg_to_lbs(70))

