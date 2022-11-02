import { pages } from "../support/page";

export class NavigationTest {

    async openProductPage() {
        await browser.url("http://automationpractice.com/index.php")
        await pages.basePage.greetingInfo().waitForDisplayed({timeout : 2000})
    }

    async pressCreateAccountButton() {
        await pages.basePage.createAccountButton().click({button: "left"})
    }

}

export default new NavigationTest()