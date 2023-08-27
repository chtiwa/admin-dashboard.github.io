import { faker } from "@faker-js/faker"
import { Order } from "./types/Order"

export function createRandomOrder(): Order {
  return {
    fullName: faker.person.fullName(),
    title: faker.commerce.product(),
    price: faker.commerce.price(),
    quantity: faker.number.int({ min: 1, max: 10 }),
    orderedAt: faker.date.past(),
    image: faker.image.urlPicsumPhotos()
  }
}

export function createRandomOrders(): Order[] {
  return faker.helpers.multiple(createRandomOrder, {
    count: 10
  })
}
