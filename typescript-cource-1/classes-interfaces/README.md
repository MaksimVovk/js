## protected - only in own and inherite classes
## private - only in own class
## public - in classes and outside classes

## readonly - readonly property

## class - create class

## extends - inherite class
## constructor - special method, used for creating and initialisation an objects
## super - call parent constructor, init before first call "this"

## get
## set

## static - call method from class without creating new class // Math.pow()

## abstract

## interface - discribe object or class
> interface Greetable { ... }
>
> class Person implements Greetable { ... }

## interface extends - extend interface used one or more another interfaces

> interface Named { ... }
>
> interface Named1 { ... }
>
> interface Greetable extends Named, Named1 { ... }

## Interfaces as Function Types
>interface AddFn {
> (n1: number, n2: number): void
>}
>
>let add: AddFn
>
>add = (n1: number, n2: number) => n1 + n2

## Optional Parameters & Properties
**name?**
Can use in interfaces, classes and constructors, but only use in bundle with interface
>interface Named {
>  readonly name?: string
>  // name: string
>}
>
>class Person implements Greetable {

>  name?: string
> 
>  age = 30
>
>  constructor (n?: string) {
>
>    if (n) {
>      this.name = n
>    }
>  }
>
>  greet (phrase: string) {
>    if (this.name) {
>      console.log(phrase + ' ' + this.name)
>    } else {
>      console.log('Hi!')
>    }
>  }
>}