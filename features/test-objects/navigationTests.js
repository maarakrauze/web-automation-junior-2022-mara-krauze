import { pages } from "../support/page";

export class NavigationTest {

    async openProductPage() {
        await browser.url("https://magento.softwaretestingboard.com/")
        await pages.basePage.greetingInfo().waitForDisplayed({timeout : 2000})
    }

    async pressCreateAccountButton() {
        await pages.basePage.createAccountButton().click({button: "left"})
    }

}

export default new NavigationTest()