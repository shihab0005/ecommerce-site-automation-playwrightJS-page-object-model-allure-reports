# ecommerce-site-automation-playwrightJS-page-object-model-allure-reports


## Technology used:
- Playwright JS
- Page Object  Model
- Allure Report
- Html Report

## Screenshots 
Successfully Order Palced

![App Screenshot](https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports/blob/main/outputs/test-finished-1%20copy%202.png?raw=true)
![App Screenshot](https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports/blob/main/outputs/test-finished-1%20copy.png?raw=true)
![App Screenshot](https://github.com/shihab0005/ecommerce-site-automation-playwrightJS-page-object-model-allure-reports/blob/main/outputs/test-finished-1.png?raw=true)

## Prerequisite:
- Node Js
- VSCode
- 
## Project Installation Process:

- Clone Project Command:
```bash
   git clone 
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

