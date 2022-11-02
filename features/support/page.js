import { BasePage } from "../page-objects/basePage";
import { SignUpPage } from "..//page-objects/signUpPage";
import { EmailPage } from "..//page-objects/emailPage";
import { MyAccountPage } from "..//page-objects/myAccountPage";

class Pages {
    constructor(){
        this.basePage = new BasePage()
        this.signUpPage = new SignUpPage()
        this.emailPage = new EmailPage()
        this.myAccountPage = new MyAccountPage()
    }
}

export const pages = new Pages()