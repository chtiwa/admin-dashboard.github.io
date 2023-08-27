import { faker } from "@faker-js/faker"
import { User } from "./types/User"

export function createRandomUser(): User {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthDate: faker.date.birthdate({ min: 18, max: 60, mode: "age" }),
    avatar: faker.image.avatar()
  }
}

export function createRandomUsers(): User[] {
  return faker.helpers.multiple(createRandomUser, {
    count: 10
  })
}
