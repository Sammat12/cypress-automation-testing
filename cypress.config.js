const { defineConfig } = require("cypress");
const { Client } = require('pg')
module.exports = defineConfig({
  e2e: {
    retries: 2,
    baseUrl: 'https://africhange-web-staging-eab9097ac535.herokuapp.com/login',
    defaultCommandTimeout: 95000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: true,
    chromeWebSecurity: false,
    pageLoadTimeout: 120000,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        async connectDB(query) {
          const client = new Client({
            user: "Africhange",
            password: "Africhangedb2:3",
            host: "africhange-dev-db-instance.conndinkpvf6.us-west-2.rds.amazonaws.com",
            database: "africhangedbstage",
            ssl: false,
            port: 5432,
          });
          await client.connect();
          const res = await client.query(query);
          await client.end();
          return res.rows;
        },
      });
    },
  },
});