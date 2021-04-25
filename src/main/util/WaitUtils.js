class WaitUtils {

    getErrorMsg(element, waittype) {
        return "Failed while waiting for "+JSON.stringify(element.selector) +" to be "+waittype;
    }
    
    WaitFactory(element, waittype) {
        if(waittype == "CLICKABLE") {
            browser.waitUntil(() => element.isClickable() == true, { timeout: 15000, timeoutMsg: this.getErrorMsg(element, waittype) })
            return element;
        }
        else if (waittype == "DISPLAYED") {
            browser.waitUntil(() => element.isDisplayed() == true, { timeout: 15000, timeoutMsg: this.getErrorMsg(element, waittype) })
            return element;
        }
        else if (waittype == "ENABLED") {
            browser.waitUntil(() => element.isExisting() == true, { timeout: 15000, timeoutMsg: this.getErrorMsg(element, waittype) })
            return element;
        }
        else if (waittype == "EXIST") {
            browser.waitUntil(() => element.isExisting() == true, { timeout: 15000, timeoutMsg: this.getErrorMsg(element, waittype) })
            return element;
        }
        else if (waittype == "NONE") {
            return element;
        }
        else {   
            return null;
        }
    }

}
module.exports=new WaitUtils()