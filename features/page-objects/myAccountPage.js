export class MyAccountPage {

    myAccount() {
        return $(".myaccount-link-list")
    }

    myAccountButton() {
        return $("//*[@id='center_column']/div/div[1]/ul/li[4]/a")
    }

}