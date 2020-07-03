class ElementUtil {

    doClick(element){
        element.waitForDisplayed();
        element.click();
    }

    doSetValue(element, value)  {
        element.waitForDisplayed();
        element.setValue(value);
    }

    doGetPageTitle(pageTitle) {
        browser.waitUntil(
            ()=> browser.getTitle()===pageTitle,
            {
                timeout: 10000, 
                timeoutMsg: "Title is not displayed after given time"
            }
        );
        return browser.getTitle();
    }

    doGetText(element) {
        element.waitForDisplayed();
        return element.getText();
    }

    doIsDisplayed(element) {
        element.waitForDisplayed();
        return element.isDisplayed();
    }

    doIsExisting(element) {
        element.waitForDisplayed();
        return element.isExisting();
    }
}
module.exports=new ElementUtil();