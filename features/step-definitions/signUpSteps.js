import { When } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When ("User fills in mandatory user details", async function() {
    await browser.pause(4000)
    await tests.signUpTest.fillOutSignUpForm()
    // await browser.pause(4000)
})

When ("User presses the Register button", async function() {
    await tests.signUpTest.pressSignUpButton()
    await browser.pause(4000)

})

