export class SignUpPage {

    firstNameInput() {
        return $("#firstname")
    }

    lastNameInput() {
        return $("#lastname")
    }

    emailInput() {
        return $("#email_address")
    }

    passwordInput() {
        return $("#password")
    }

    confirmationPasswordInput() {
        return $("#password-confirmation")
    }

    createAccountButton() {
        return $(".submit")
    }

    successMessage() {
        return $(".message-success")
    }

}