const loginPage=require('../main/page/login.page')
const dashboardPage=require('../main/page/dashboard.page');
const configData=require('../main/config/configdata');
const constants=require('../main/constants/FrameworkContants')
const assert =require('chai').assert;

describe('loginPage Test -->', function(){

    it('Should verify login page title', function(){
        browser.url('/');
        browser.maximizeWindow();
        assert.equal(loginPage.getLoginPageTitle(), constants.LOGIN_PAGE_HEADER,'Login Page title did not match');
    });

    it('Should verify login page header', function() {
            assert.equal(loginPage.isLoginHeaderDisplayed(), true, 'Login page header is not displayed');
    })

    it('Should verify forgot password link', function() {
        assert.equal(loginPage.isForgotPasswordDisplayed(), true, 'Forgot password Link is not displayed');
    })

    it('Should verify invalid login', function() {
        loginPage.doLogin(configData.invalidUser, configData.invalidPwd);
        let inValidResult=browser.getPageSource().includes('Invalid credentials');
        assert.equal(inValidResult, true, 'Invalid Crendetails message is not displayed');
    })

    it('Should verify valid login', function(){
        loginPage.doLogin(configData.username, configData.password);
        assert.equal(dashboardPage.isBrandImageExist(), true, 'Brand Image Not found, Login Failed');
    })

});