# Ecommerce Site Automation With PlaywrightJs
User Login With username and password and Select Product dynamically and add to Cart Product.
Successfully purches product which is added to Cart with user details form fillup.There are use Some Assertion 
to Check Validity.Also User Can Successfully Logout.

## Technology used:
- Playwright JS
- Page Object  Model
- Allure Report
- Html Report

##Project Video
[6fb6f157c65fc447.webm](https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports/assets/41753677/dace57a8-45a1-441b-aa1f-7b7f94fa51b5)

## Screenshots 
Successfully Order Palced
![App Screenshot](https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports/blob/main/outputs/test-finished-1%20copy%202.png?raw=true)
![App Screenshot](https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports/blob/main/outputs/test-finished-1%20copy.png?raw=true)
![App Screenshot](https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports/blob/main/outputs/test-finished-1.png?raw=true)
![App Screenshot](https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports/blob/main/outputs/Capture.PNG?raw=true)

## Prerequisite:
- Node Js
- VSCode
  
## Project Installation Process:

- Clone Project Command:
```bash
   git clone https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports.git 
```
- Install All Project Package:
```bash
  npm install  
```
- Run Project:
```bash
  npx playwright test ProductPurches.spec.js
```

## Allure Report Generate Process:

- Allure Report Package Install Command:
```bash
  npm i -D @playwright/test allure-playwright
```
- Allure Report Config Command:
```bash
 npx playwright test --reporter=line,allure-playwright  
```
- Generate Allure Report Command:
```bash
  allure generate allure-results -o allure-report --clean
```
- Open Allure Report Command:
```bash
  allure open allure-report
```

