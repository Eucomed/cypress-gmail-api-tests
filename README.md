# Cypress-gmail-api-tests

## Instructions of how tests can be executed

**Executing tests locally**

1. Check that node.js, cypress, and typescript are installed on your machine, as well as the browser you plan to use to execute the tests..
   Check versions via running the commands: npm --version, cypress -v, tsc -v
   If no version is known, install needed components: npm install -g npm, npm install --global yarn, yarn add cypress --save-dev,yarn add -g typescript
2. Pull the current version of test from the repository
3. Put your GMAIL OAuth2.0 credentials (username, password, clientId, clientSecret, refreshToken) to the cypress.env.json file.
   - username: your gmail username
   - password: your gmail password
   - clientId, clientSecret: you need to create a project on https://console.cloud.google.com/ for generating clientId and clientSecret
   - refreshToken: you can use your credentials at https://developers.google.com/oauthplayground to generate a refreshToken
   
   This is a very good guide for the whole credential generation: https://filiphric.com/google-sign-in-with-cypress.
   
4. Execute one of the following commands (pick a command based on your target browser and whether you want to run headless mode):
   yarn test:chrome
   yarn test:chrome:headless
   yarn test:firefox
   yarn test:firefox:headless
   yarn test:edge
   yarn test:edge:headless

## Test design and structure

1. Check valid authorization
Goal: To check if the user has full access to his account/emails. 
Test steps: Send request for getting the lastest emails to Gmail API. Validate the results.

Please contact the creator for more information or if you haven't found the information you needed or have faced any problems: hostakova.evka@gmail.com
