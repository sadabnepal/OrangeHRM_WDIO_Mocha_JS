# WebdriverIOJavaScriptMocha
This is a sample project that uses WebdriverIO and JavaScript. It includes examples of the PageObject pattern and some practical examples for using WebdriverIO for cross browser and parallel testing.

## Pre-requisite Steps
```
1. git clone https://github.com/sadabnepal/WebdriverIOJavaScriptMocha.git
2. Navigate to WebdriverIOJavaScriptMocha
3. In the terminal, Perform "npm i" to install all the dependencies present in the package.json file.
4. In the terminal, perform `npm test` to start the script execution
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
- In the terminal, perform `npm run report` to open allure report port. Report will be opened in default browser

### Key Features
	- Mocha framework
	- Parallel execution
	- Cross browser testing
	- Page Object Model pattern
	
### Sample Report
![image](https://user-images.githubusercontent.com/65847528/102648981-76d89900-418e-11eb-89a9-29a6289b0d73.png)
