# Core types

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

## Literal Types
what value do you expect

**Example**
> * value: 'as-number'

## Type Aliases
alias for types

**Example**
> * type alias = number | string


### Type Casing
In TypeScript, you work with types like string or number all the times.

Important: It is string and number (etc.), NOT String, Number etc.

The core primitive types in TypeScript are all lowercase!


### Type Aliases & Object Types
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

>type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

>function greet(user: { name: string; age: number }) {
>  console.log('Hi, I am ' + user.name);
>}
 
>function isOlder(user: { name: string; age: number }, checkAge: number) {
>  return checkAge > user.age;
}

To:
>
>type User = { name: string; age: number };
>
>function greet(user: User) {
>    console.log('Hi, I am ' + user.name);
>  }
>  
>  function isOlder(user: User, checkAge: number) {
>    return checkAge > user.age;
>}


## These links might also be interesting:

> Official TypeScript Docs: https://www.typescriptlang.org/docs/handbook/basic-types.html