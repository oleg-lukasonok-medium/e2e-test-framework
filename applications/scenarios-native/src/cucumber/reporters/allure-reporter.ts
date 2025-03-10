/**
 * 
**/

import { AllureRuntime, CucumberJSAllureFormatter } from 'allure-cucumberjs'

export default class Reporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(
      options,
      new AllureRuntime({ resultsDir: '../../target/allure-results' }),
      {
        labels: [
          {
            pattern: [/@epic:(.*)/],
            name: 'epic',
          },
          {
            pattern: [/@feature:(.*)/],
            name: 'feature',
          },
          {
            pattern: [/@severity:(.*)/],
            name: 'severity',
          },
          {
            pattern: [/@framework:(.*)/],
            name: 'framework',
          },
          {
            pattern: [/@level:(.*)/, /@type:(.*)/],
            name: 'tag',
          },
        ],
        links: [
          {
            pattern: [/@issue=(.*)/],
            type: 'issue',
            urlTemplate: 'https://navifypoc.atlassian.net/browse/%s',
          },
          {
            pattern: [/@link=(.*)/],
            type: 'tms',
            urlTemplate: 'https://navifypoc.atlassian.net/browse/%s',
          },
        ],
      },
    )
  }
}
