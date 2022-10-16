import { pages } from "../support/page";
import { data } from "../support/data";

export class SignUpTest {

    async fillOutSignUpForm() {
        await pages.signUpPage.firstNameInput().setValue(await data.userData.randomUser.firstName)
        await pages.signUpPage.lastNameInput().setValue(await data.userData.randomUser.lastName)
        await pages.signUpPage.emailInput().setValue(await data.userData.randomUser.email)
        await pages.signUpPage.passwordInput().setValue(await data.userData.randomUser.password)
        await pages.signUpPage.confirmationPasswordInput().setValue()
    }

    async pressSignUpButton() {
        await pages.signUpPage.createAccountButton().click({button: "left"})
    }

    async validateSuccessMessage() {
        await pages.signUpPage.successMessage().isDisplayed()
    }

}

export default new SignUpTest()