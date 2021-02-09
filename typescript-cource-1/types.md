# Core types
***

## number
All numbers, no differentiation between integers or floats

**Example**
> 1, 5.3, -10

## string
All text value

**Example**
> 'Hi', "Hi", \`Hi\`

## boolean
Just these two, no "truthy" or "falsy" values

**Example**
> true, false

## object
Any JavaScript object, more specific types(type of object) are possible

**Example**
> { age: 30 }

## Array
Any JavaScript array, type can be flexible or strict (regarding the element types)

**Example**
> [1, 2, 3]

## Tuple
Added by TypeScript: Fixed-length array

**Example**
> [1, 2]

## Enum
Added by TypeScript: Automatically enumerated global constant identiers

**Example**
> enum {NEW, OLD}

## any
Any king of value, not specific type assignment

**Example**
> * (any)

## Union
if you need multiple data types

**Example**
> * number | string | boolean


### Type Casing
In TypeScript, you work with types like string or number all the times.

Important: It is string and number (etc.), NOT String, Number etc.

The core primitive types in TypeScript are all lowercase!