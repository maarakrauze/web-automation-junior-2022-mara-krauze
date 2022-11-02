import { NavigationTest } from "../test-objects/navigationTests";
import { SignUpTest } from "../test-objects/signUpTests";
import { EmailTest } from "../test-objects/emailTests";
import { MyAccountTest } from "../test-objects/myAccountTests";

class Tests {
    constructor() {
        this.navigationTest = new NavigationTest()
        this.signUpTest = new SignUpTest()
        this.emailTest = new EmailTest()
        this.myAccountTest = new MyAccountTest()
    }
}

export const tests = new Tests()