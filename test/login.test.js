const LoginPage=require('../page/login.page');
const constants=require('../constant');
const configData=require('../config');
const dashboardPage=require('../page/dashboard.page');

describe('LoginPage Test -->', function(){

    it('Should verify login page title', function(){
        browser.url('/');
        browser.maximizeWindow();
        const title = LoginPage.getLoginPageTitle();
        assert.equal(title, constants.LOGIN_PAGE_HEADER,'Login Page title did not match');
    });

    it('Should verify login page header', function(){
            const result =LoginPage.isLoginHeaderDisplayed()
            assert.equal(result, true, 'Login page header is not displayed');
    })

    it('Should verify forgot password link', function(){
        assert.equal(LoginPage.isForgotPasswordDisplayed(), true, 'Forgot password Link is not displayed');
    })

    it('Should verify invalid login', function(){
        LoginPage.doLogin(configData.invalidUser, configData.invalidPwd);
        let inValidResult=browser.getPageSource().includes('Invalid credentials');
        assert.equal(inValidResult, true, 'Invalid Crendetails message is not displayed');
    })

    it('Should verify valid login', function(){
        LoginPage.doLogin(configData.username, configData.password);
        const result = dashboardPage.isBrandImageExist();
        assert.equal(result, true, 'Brand Image Not found, Login Failed');
    })

});