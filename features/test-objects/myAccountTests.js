import { pages } from "../support/page";

export class MyAccountTest {

    async openMyAccountPage() {
        await pages.myAccountPage.myAccount().waitForDisplayed({timeout : 2000})
        }

    async clickMyAccount() {
        await pages.myAccountPage.myAccountButton().click({button: "left"})
        //assert
        const inputOne = await $("#firstname");
        await expect(inputOne).toHaveValueContaining("Janis")

        const inputSurnameOne = await $("#lastname");
        await expect(inputSurnameOne).toHaveValueContaining("Berzins")
    }

    async clickMyNotAccount() {
        await pages.myAccountPage.myAccountButton().click({button: "left"})
        //assert 
        const input = await $("#firstname");
        const inputSurname = await $("#lastname");
        await expect(input).toHaveValueContaining("Peteris")
        await expect(inputSurname).toHaveValueContaining("Klavins")
    }
}
export default new MyAccountTest()