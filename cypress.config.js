const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      video: false;
      screenshotOnRunFailure: false;
      require('cypress-mochawesome-reporter/plugin')(on); // for html reports
    },
  },
  // video: false,
  // screenshotOnRunFailure: false,
});
