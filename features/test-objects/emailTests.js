import { pages } from "../support/page";
import { data } from "../support/data";


export class EmailTest {

    async fillInEmail() {
        await pages.emailPage.signInEmailInput().setValue(await data.userData.randomUser.email)
    }

    async pressSubmitEmailButton() {
        await pages.emailPage.emailCreateButton().click({button: "left"})
    }

}
export default new EmailTest()