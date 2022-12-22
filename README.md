# Cypress example on amazon

This is a simple project to demonstrate the use of cypress.io.
It shows a test working on amazon, by performing a search and asserting against the expected results. 
It is also integrated with cucumber to attain the benefits of BDD.

## prerequisites
1. Clone the repository
2. From root directory type npm install

## Running the test from cypress launchpad
1. npm run cy:open 
2. From cypress launchpad click on "search.feature" displayed under E2E specs. This should start the test.
3. Wait until the test has finished. 
4. There should be a number 1 displayed next to the green tick once the test has finished

## Running the test headless
1. npm run test
2. Wait until test has finished. It should pass with the message "All specs passed!"

