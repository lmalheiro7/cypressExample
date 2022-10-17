import { defineConfig } from 'cypress'
import { config } from 'cypress/types/bluebird'

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    experimentalStudio: true,
    chromeWebSecurity:true,
    video: true,
    setupNodeEvents(on, config) {
      return require('cypress-high-resolution')(on, config)
    },
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
