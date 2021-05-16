# WebdriverIOJavaScriptMocha
This is a sample project that uses WebdriverIO and JavaScript. It includes examples of the PageObject pattern and some practical examples for using WebdriverIO for cross browser and parallel testing.

### Pre-requisite Steps
```
1. git clone https://github.com/sadabnepal/WebdriverIOJavaScriptMocha.git
2. Navigate to WebdriverIOJavaScriptMocha
3. In the terminal, Perform "npm i" to install all the dependencies present in the package.json file.
4. In the terminal, perform `npm test` to start the script execution
```

### Folder structure
```
├───src
│   ├───main
|   │   ├───config
|   │   |   └───configdata.js
|   │   ├───constants
|   │   |   ├───FrameworkConstants.js
|   │   |   └───WaitConstants.js
|   │   ├───pages
|   │   |   ├───dashboard.page.js
|   │   |   ├───login.page.js
|   │   |   └───page.js
|   │   └───util
|   │       └───WaitUtils.js
|   └───test
|	    ├───dashboard.test.js
|	    ├───frameAndDrag.test.js
|	    └───login.test.js
├───package.json
├───README.md
└───wdio.conf.js
```

### Reports used
```
allure-reporter
spec-reporter
```

### Generate allure reporter
```
npm run report
```

### Key Features
	- Mocha framework
	- Parallel execution
	- Cross browser testing
	- Page Object Model pattern
	
### Sample Report
![image](https://user-images.githubusercontent.com/65847528/102648981-76d89900-418e-11eb-89a9-29a6289b0d73.png)
