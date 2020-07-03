# OrangeHRM_WDIO_Mocha_JavaScript
This is a sample project that uses WebdriverIO and JavaScript. This project is useful not only as an example of WebdriverIO and JavaScript playing nicely together, but it includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Mocha & Chai.

## Pre-requisite Steps
```
1. git clone https://github.com/sadabnepal/OrangeHRM_WDIO_Mocha_JavaScript.git
2. Navigate to OrangeHRM_WDIO_Mocha_JavaScript
3. In the terminal, Perform "npm i" to install all the dependencies present in the package.json file.
4. In the terminal, perform `npm run test` to start the script execution
```
### Folder structure
- page - This folder contains all page objects and related action methods
- test - This folder contains all `.js` files.
- `config.js` - This file contains user credentials
- `constant.js` - This file contains all constant values that needs to be compared with expected results 
- `wdio.config.js` - This file contains all the configuration set up of the framework
- `package.json` - This file holds all dependencies required for developement/execution
- `.gitignore` - This file contains folder/file that needs to be ignored for git integration

### Reports used
`allure-reporter`
`spec-reporter`

### Generate/Open allure reporter
- In the terminal, perform `npm run ReportRun` to open allure report port. Report will be opened in default browser 
