const dashboardPage=require("../main/page/dashboard.page");
const loginPage=require("../main/page/login.page");
const configData=require('../main/config/configdata');
const expect=require('chai').expect;

describe('Verify Dashboard Page', function() {

    it('should login to application', function(){
        browser.url('/');
        browser.maximizeWindow();
        loginPage.doLogin(configData.username, configData.password)
    })

    it('should verify brand image existence', function(){
        expect(dashboardPage.isBrandImageExist()).to.be.true;
    })

    it('should verify dashboard page elements presence', function(){
        expect(dashboardPage.isQuickLaunchDisplayed()).to.be.true;
        expect(dashboardPage.isAssignLeaveExists()).to.be.true;
        expect(dashboardPage.isLeaveListExists()).to.be.true;
        expect(dashboardPage.isTimesheetsExists()).to.be.true;
        expect(dashboardPage.isEDSDisplayed()).to.be.true;
        expect(dashboardPage.isLegendDisplayed()).to.be.true;
        expect(dashboardPage.isPLRDisplayed()).to.be.true;
        expect(dashboardPage.isFooterDisplayed()).to.be.true;
    })

});