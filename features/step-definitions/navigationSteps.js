import { Given, When} from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

Given ("User has opened product page store", async function() {
    await tests.navigationTest.openProductPage()
})

When ("User proceeds for SignUp", async function() {
    await tests.navigationTest.pressCreateAccountButton()
})

