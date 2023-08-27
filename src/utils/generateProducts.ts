import { faker } from "@faker-js/faker"
import { Product } from "./types/Product"

export function createRandomProduct(): Product {
  return {
    title: faker.commerce.product(),
    price: faker.commerce.price(),
    createdAt: faker.date.past(),
    image: faker.image.urlPicsumPhotos(),
    description: faker.commerce.productDescription()
  }
}

export function createRandomProducts(): Product[] {
  return faker.helpers.multiple(createRandomProduct, {
    count: 10
  })
}
