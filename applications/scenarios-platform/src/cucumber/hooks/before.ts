/**
 * 
 */
// const MODULE_ID = '@lego-medium/scenarios-platform-src-cucumber-hooks-before'
// import { getLogger } from '@lego-medium/loggers'
// const LOGGER = getLogger(MODULE_ID)

import {
  Before,
  AfterStep,
  ITestCaseHookParameter,
  setWorldConstructor
} from '@cucumber/cucumber'

import { WordExtended } from '../world-extended'

setWorldConstructor(WordExtended)

Before(
  function (this: WordExtended, scenario: ITestCaseHookParameter) {
    this.setScenario(scenario)
  }
)

AfterStep(function (this: WordExtended) {
  this.currentStepIndex++
})
