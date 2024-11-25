/**
 * 
 */
const MODULE_ID = '@lego-medium/scenarios-platform-src-cucumber-hooks-before-all'
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import {
  BeforeAll,
  setDefaultTimeout,
} from '@cucumber/cucumber'

import {
  configurationModule,
} from '@lego-medium/configuration'

import {
  contextModule,
} from '@lego-medium/context'

Object.defineProperty(RegExp.prototype, 'toJSON', {
  value: RegExp.prototype.toString
})

const CUCUMBER_DEFAULT_TIMEOUT = 60_000
setDefaultTimeout(CUCUMBER_DEFAULT_TIMEOUT)

BeforeAll(async () => {
  LOGGER.debug({
    action: `${MODULE_ID}`,
    message: 'Start'
  })
  await configurationModule.load()
  await contextModule.initialize()
  LOGGER.debug({
    action: `${MODULE_ID}`,
    message: 'End'
  })
})


