export class BasePage {

    greetingInfo() {
        return $('.page-header .greet')
    }

    createAccountButton() {
        return $("//*[contains(@class, 'page-header')]//a[text()='Create an Account']")
    }

}