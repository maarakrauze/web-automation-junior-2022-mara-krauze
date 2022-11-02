Welcome to Web automation Junior task!

First of all you need to install :
1. Node.js
2. Java JDK
3. Allure Framework

Next you will need to have WebdriverIO:
npm install webdriverio

If you already have WebdriverIO and you're in the root directory of an existing project, run:
npm init wdio .

There are 2 test scenarios. 
To run, use npm run test + correct scenario name.
For these tests:
npm run test "@SignUpUnique"  
npm run test "@SignUpAndFail" 

After, you can generate allure reports, run:
npm install allure-commandline --save-dev
allure-results
allure generate ./allure-results --clean && allure open  

Enjoy!

