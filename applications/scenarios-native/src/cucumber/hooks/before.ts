/**
 * 
 */
// const MODULE_ID = `${import.meta.url}`
// import { getLogger } from '@lego-medium/loggers'
// const LOGGER = getLogger(MODULE_ID)

import {
  Before,
  AfterStep,
  ITestCaseHookParameter,
  setWorldConstructor
} from '@cucumber/cucumber'

import { WorldExtended } from '@lego-medium/cucumber-extensions'

setWorldConstructor(WorldExtended)

Before(
  function (this: WorldExtended, scenario: ITestCaseHookParameter) {
    this.setScenario(scenario)
  }
)

AfterStep(function (this: WorldExtended) {
  this.currentStepIndex++
})
