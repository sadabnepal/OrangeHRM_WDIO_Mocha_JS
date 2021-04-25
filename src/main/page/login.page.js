const constants=require('../constants/FrameworkContants');
const page = require('./page');

class LoginPage {

    //Locatores
    get loginHeader() { return $('#logInPanelHeading') }
    get txtUser() { return $('#txtUsername') }
    get txtPassword() { return $('#txtPassword') }
    get btnLogin() { return $('#btnLogin') }
    get lnkForgotPassword() { return $('=Forgot your password?') }

    //Action Methods
    getLoginPageTitle() {
        return page.doGetPageTitle(constants.LOGIN_PAGE_HEADER);
    }

    isLoginHeaderDisplayed() {
       return page.doIsDisplayed(this.loginHeader);
    }

    isForgotPasswordDisplayed() {
        return page.doIsDisplayed(this.lnkForgotPassword);
    }

    doLogin(userid, pwd){
        page.doSetValue(this.txtUser, userid);
        page.doSetValue(this.txtPassword, pwd);
        page.doClick(this.btnLogin);
    }

}
module.exports=new LoginPage();