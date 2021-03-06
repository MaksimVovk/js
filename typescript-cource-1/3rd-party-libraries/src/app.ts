// import _ from 'lodash'

// declare var GLOBAL: any

// console.log(GLOBAL)
// console.log(_.shuffle([1, 2, 3, 4]))
import 'reflect-metadata'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'
import { Product } from './product.model'


// const p1 = new Product('A Book', 12.99)
// console.log(p1.getInformation())

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 12.99 }
]

const newProd = new Product('', -5.99)
validate(newProd).then(error => {
  if (error.length > 0) {
    console.log(error)
  } else {
    console.log(newProd.getInformation())
  }
})
// const loaderProducts = products.map(product => new Product(product.title, product.price))

const loaderProducts = plainToClass(Product, products)

for (const prod of loaderProducts) {
  console.log(prod.getInformation())
}