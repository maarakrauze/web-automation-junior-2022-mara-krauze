import {When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When ("User apply new account information", async function() {
    await tests.signUpTest.fillOutSignUpForm()
})

When ("User presses the Create and Account button", async function() {
    await tests.signUpTest.pressSignUpButton()
})

Then ("User account is created", async function() {
    await tests.signUpTest.validateSuccessMessage()
})