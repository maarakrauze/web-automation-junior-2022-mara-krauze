export class SignUpPage {

    firstNameInput() {
        return $("#customer_firstname")
    }

    lastNameInput() {
        return $("#customer_lastname")
    }

    passwordInput() {
        return $("#passwd")
    }

    adressInput() {
        return $("#address1")
    }

    cityInput() {
        return $("#city")
    }

    stateDropdown() {
        return $("#id_state")
    }

    zipInput() {
        return $("//*[@id='postcode']")
    }   

    mobilePhoneInput() {
        return $("#phone_mobile")
    }   

    createAccountButton() {
        return $("#submitAccount")
    }

}
