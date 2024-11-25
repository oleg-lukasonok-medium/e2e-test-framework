/**
 * 
 */
// const MODULE_ID = '@lego-medium-scenarios-platform-src-cucumber-world-index'
// import { getLogger } from '@lego-medium/loggers'
// const LOGGER = getLogger(MODULE_ID)

import { ITestCaseHookParameter, World } from '@cucumber/cucumber'
import { Pickle } from '@cucumber/messages'

export class WordExtended extends World {

  scenario?: ITestCaseHookParameter
  currentStepIndex: number = 0

  constructor(options: any) {
    super(options)
  }

  setScenario(scenario: ITestCaseHookParameter) {
    this.scenario = scenario
  }

  getScenario() {
    const RET_VAL = this.scenario
    return RET_VAL
  }

  getScenarioPickle(): Pickle | undefined {
    const RET_VAL = this.getScenario()?.pickle
    return RET_VAL
  }

  getScenarioName() {
    const RET_VAL = this.getScenarioPickle()?.name
    return RET_VAL
  }

  getScenarioStepName() {
    let retVal: any = null
    if (
      this.scenario
    ) {
      const STEP = this.getScenarioPickle()?.steps[this.currentStepIndex]
      retVal = STEP ? STEP.text : null
    }
    return retVal
  }

  getActionName() {
    const SCENARIO_NAME = this.getScenarioName()
    const SCENARIO_STEP_NAME = this.getScenarioStepName()
    const RET_VAL = `${SCENARIO_NAME} / ${SCENARIO_STEP_NAME}`
    return RET_VAL
  }
}
