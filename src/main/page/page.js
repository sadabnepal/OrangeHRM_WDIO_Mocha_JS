const WaitUtils=require('../util/WaitUtils');
const WaitEnums=require('../constants/WaitConstants')

class Page {
    doClick(element) {
        WaitUtils.WaitFactory(element, WaitEnums.CLICKABLE).click()
    }

    doSetValue(element, value)  {
        WaitUtils.WaitFactory(element, WaitEnums.DISPLAYED).setValue(value);
    }

    doGetPageTitle(pageTitle) {
        browser.waitUntil(()=> browser.getTitle()===pageTitle,
            { timeout: 10000, timeoutMsg: "Title is not displayed after given time" }
        );
        return browser.getTitle();
    }

    doGetText(element) {
        return WaitUtils.WaitFactory(element, WaitEnums.DISPLAYED).getText();
    }

    doIsDisplayed(element) {
        return WaitUtils.WaitFactory(element, WaitEnums.DISPLAYED).isDisplayed();
    }

    doIsExisting(element) {
        return WaitUtils.WaitFactory(element, WaitEnums.EXIST).isExisting();
    }
}
module.exports=new Page()