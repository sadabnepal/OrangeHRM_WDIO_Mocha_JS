const ElementUtils=require('../util/elemUtil');

class DashboardPage {

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
    isBrandImageExist() { return ElementUtils.doIsExisting(this.brandImg); }
    isQuickLaunchDisplayed() { return ElementUtils.doIsDisplayed(this.quickLaunchMenu); }
    isAssignLeaveExists() { return ElementUtils.doIsExisting(this.assignLeave); }
    isLeaveListExists() { return ElementUtils.doIsExisting(this.leaveList); }
    isTimesheetsExists() { return ElementUtils.doIsExisting(this.timeSheets); }
    isEDSDisplayed() { return ElementUtils.doIsDisplayed(this.EDS); }
    isLegendDisplayed() { return ElementUtils.doIsDisplayed(this.legend); }
    isPLRDisplayed() { return ElementUtils.doIsDisplayed(this.PLR); }
    isFooterDisplayed() { return ElementUtils.doIsDisplayed(this.footer); }

}
module.exports=new DashboardPage();