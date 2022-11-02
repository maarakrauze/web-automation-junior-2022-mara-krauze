const { faker } = require("@faker-js/faker")

export default class UserData {
    constructor(){
        this.randomUser = new RandomUser(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.internet.password(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.zipCode("#####"),
            faker.phone.number("#########"),
            faker.internet.email()
        )       
    }
}

class RandomUser {
    constructor(firstName, lastName, password, address, city, zipCode, phone, email){
        this.firstName = firstName,
        this.lastName = lastName,
        this.password = password,
        this.address = address,
        this.city = city,
        this.zipCode = zipCode,
        this.phone = phone,
        this.email = email
    }
}