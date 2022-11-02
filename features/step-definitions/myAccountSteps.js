import { When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";


Then ("User is logged in", async function() {
    await tests.myAccountTest.openMyAccountPage()
})

When ("User is in My account page", async function() {
    await tests.myAccountTest.clickMyAccount()
    await browser.pause(4000)
})

When ("User is NOT in My account page", async function() {
    await tests.myAccountTest.clickMyNotAccount()
    await browser.pause(4000)
})