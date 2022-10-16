const { faker } = require("@faker-js/faker")

export default class UserData {
    constructor(){
        this.randomUser = new RandomUser(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.internet.email(),
            "Qwerty121331@qfwqf"
        )       
    }
}

class RandomUser {
    constructor(firstName, lastName, email, password){
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.password = password
    }
}