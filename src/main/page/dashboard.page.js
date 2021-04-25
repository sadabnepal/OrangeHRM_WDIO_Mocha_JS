const page = require('./page');

class Dashboardpage {

    //Locators
    get brandImg() { return $('#branding>a>img') }
    get quickLaunchMenu() { return $("//legend[text()='Quick Launch']/parent::*") }
    get assignLeave() { return $("//span[contains(text(),'Assign Leave')]/parent::a/parent::div") }
    get leaveList() { return $("//span[contains(text(),'Leave List')]/parent::a/parent::div") }
    get timeSheets() { return $("//span[contains(text(),'Timesheets')]/parent::a/parent::div") }
    get EDS() { return $("//legend[text()='Employee Distribution by Subunit']/parent::*") }
    get legend() { return $("//legend[text()='Legend']/parent::*") }
    get PLR() { return $("//legend[text()='Pending Leave Requests']/parent::*") }
    get footer() { return $('#footer') }

    //Action Methods
    isBrandImageExist() { return page.doIsExisting(this.brandImg); }
    isQuickLaunchDisplayed() { return page.doIsDisplayed(this.quickLaunchMenu); }
    isAssignLeaveExists() { return page.doIsExisting(this.assignLeave); }
    isLeaveListExists() { return page.doIsExisting(this.leaveList); }
    isTimesheetsExists() { return page.doIsExisting(this.timeSheets); }
    isEDSDisplayed() { return page.doIsDisplayed(this.EDS); }
    isLegendDisplayed() { return page.doIsDisplayed(this.legend); }
    isPLRDisplayed() { return page.doIsDisplayed(this.PLR); }
    isFooterDisplayed() { return page.doIsDisplayed(this.footer); }
}
module.exports=new Dashboardpage();