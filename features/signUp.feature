Feature: Magento SignUp tests

    @SignUpUnique
    Scenario: Valid sign up test using unique credentials
        Given User has opened product page store
        When User proceeds for SignUp
        And User apply new account information
        And User presses the Create and Account button
        Then User account is created