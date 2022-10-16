import { BasePage } from "../page-objects/basePage";
import { SignUpPage } from "..//page-objects/signUpPage";

class Pages {
    constructor(){
        this.basePage = new BasePage()
        this.signUpPage= new SignUpPage()
    }
}

export const pages = new Pages()