import { pages } from "../support/page";
import { data } from "../support/data";

export class SignUpTest {

    async fillOutSignUpForm() {
        // await pages.signUpPage.firstNameInput().setValue(await data.userData.randomUser.firstName)
        await pages.signUpPage.firstNameInput().setValue("Janis")
        // await pages.signUpPage.lastNameInput().setValue(await data.userData.randomUser.lastName)
        await pages.signUpPage.lastNameInput().setValue("Berzins")
        await pages.signUpPage.passwordInput().setValue(await data.userData.randomUser.password)
        await pages.signUpPage.adressInput().setValue(await data.userData.randomUser.address)
        await pages.signUpPage.cityInput().setValue(await data.userData.randomUser.city)

        //state dropdown
        await pages.signUpPage.stateDropdown().selectByAttribute('value', '1')
        await pages.signUpPage.stateDropdown().getValue()
        
        await pages.signUpPage.zipInput().setValue(await data.userData.randomUser.zipCode)
        await pages.signUpPage.mobilePhoneInput().setValue(await data.userData.randomUser.phone)
    }

    async pressSignUpButton() {
        await pages.signUpPage.createAccountButton().click({button: "left"})
    }
}

export default new SignUpTest()