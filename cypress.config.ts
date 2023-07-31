import { defineConfig } from "cypress";
const dotenvFlowPlugin = require("cypress-dotenv-flow");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config = dotenvFlowPlugin(config);
      config.env = {
        ...process.env,
        ...config.env
      };
      return config;
    },
    baseUrl: "http://localhost:3000",
    testIsolation: false
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  }
});
