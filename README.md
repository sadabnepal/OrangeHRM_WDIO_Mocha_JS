# WebdriverIOJavaScriptMocha
This is a sample project that uses WebdriverIO and JavaScript. It includes examples of the PageObject pattern and some practical examples for using WebdriverIO for cross browser and parallel testing.

## Requirements
-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/WebdriverIOJavaScriptMocha.git
2. Navigate to WebdriverIOJavaScriptMocha
```

Install the dependencies:
```bash
npm install
```

Run all tests:
```bash
npm test
```

Generate allure report:
```
npm run report
```

## Folder structure
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


## Key Features
	- Mocha framework
	- Allure Report
	- Parallel execution
	- Cross browser testing
	- Page Object Model pattern
	
## Sample Report
![image](https://user-images.githubusercontent.com/65847528/102648981-76d89900-418e-11eb-89a9-29a6289b0d73.png)
