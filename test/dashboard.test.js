const LoginPage=require('../page/login.page');
const configData=require('../config');
const dashboardPage=require('../page/dashboard.page');

describe('Verify Dashboard Page', function() {

    it('should login to application', function(){
        browser.url('/');
        browser.maximizeWindow();
        LoginPage.doLogin(configData.username, configData.password)
    })

    it('should verify brand image existence', function(){
        const brandImgResult = dashboardPage.isBrandImageExist();
        expect(brandImgResult).to.be.equal(true);
    })

    it('should verify dashboard page elements presence', function(){
        expect(dashboardPage.isQuickLaunchDisplayed()).to.be.equal(true);
        expect(dashboardPage.isAssignLeaveExists()).to.be.equal(true);
        expect(dashboardPage.isLeaveListExists()).to.be.equal(true);
        expect(dashboardPage.isTimesheetsExists()).to.be.equal(true);
        expect(dashboardPage.isEDSDisplayed()).to.be.equal(true);
        expect(dashboardPage.isLegendDisplayed()).to.be.equal(true);
        expect(dashboardPage.isPLRDisplayed()).to.be.equal(true);
        expect(dashboardPage.isFooterDisplayed()).to.be.equal(true);
    })

});