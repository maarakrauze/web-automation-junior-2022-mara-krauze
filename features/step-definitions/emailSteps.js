import { When } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When ("User enters a new email address", async function() {
    await tests.emailTest.fillInEmail()
    await browser.pause(4000)
})

When ("User presses Create account button", async function() {
    await tests.emailTest.pressSubmitEmailButton()
})
