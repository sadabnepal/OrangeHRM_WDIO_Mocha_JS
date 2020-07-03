const ElementUtil=require('../util/elemUtil');
const constants=require('../constant');

class LoginPage {

    //Locatores
    get loginHeader() { return $('#logInPanelHeading') }
    get txtUser() { return $('#txtUsername') }
    get txtPassword() { return $('#txtPassword') }
    get btnLogin() { return $('#btnLogin') }
    get lnkForgotPassword() { return $('=Forgot your password?') }

    //Action Methods
    getLoginPageTitle() {
        return ElementUtil.doGetPageTitle(constants.LOGIN_PAGE_HEADER);
    }

    isLoginHeaderDisplayed() {
       return ElementUtil.doIsDisplayed(this.loginHeader);
    }

    isForgotPasswordDisplayed() {
        return ElementUtil.doIsDisplayed(this.lnkForgotPassword);
    }

    doLogin(userid, pwd){
        ElementUtil.doSetValue(this.txtUser, userid);
        ElementUtil.doSetValue(this.txtPassword, pwd);
        ElementUtil.doClick(this.btnLogin);
    }

}
module.exports=new LoginPage();