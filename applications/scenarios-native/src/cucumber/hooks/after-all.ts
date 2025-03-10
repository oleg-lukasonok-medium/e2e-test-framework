/**
 * 
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { AfterAll } from '@cucumber/cucumber'

AfterAll(async () => {
  LOGGER.debug({
    action: `${MODULE_ID}`,
    message: 'Start' 
  })
  LOGGER.debug({
    action: `${MODULE_ID}`,
    message: 'End'
  })
})


