const { assert } = require("chai");

describe("Learning frames", function() {

    it("should switch between frames", function() {
        browser.url('https://demoqa.com/frames');
        browser.maximizeWindow();
        
        let mainHeader= $('.main-header');
        let pageFrame= $('#frame1');
        let frameHeading= $('#sampleHeading');

        browser.switchToFrame(pageFrame);
        let text=frameHeading.getText();
        assert.equal(text, "This is a sample page");

        browser.switchToParentFrame();
        let textHeader=mainHeader.getText();
        assert.equal(textHeader, "Frames");
    })

    it("Should drag and drop element", function() {
        browser.url('https://demoqa.com/droppable');

        const drag= $('#draggable');
        const drop= $('#simpleDropContainer>#droppable');
        const textDropped= $('#simpleDropContainer>#droppable>p');

        drag.dragAndDrop(drop);
        browser.pause(3000);
        let text=textDropped.getText();
        assert.equal(text, "Dropped!");
    })
})