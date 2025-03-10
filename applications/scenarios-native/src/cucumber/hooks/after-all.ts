/**
 * 
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { AfterAll } from '@cucumber/cucumber'

import { nodeSDKModule } from '@lego-medium/opentelemetry'

AfterAll(async () => {
  LOGGER.debug({
    action: `${MODULE_ID}`,
    message: 'Start'
  })

  await nodeSDKModule.getInstance().shutdown()
  LOGGER.debug({
    action: `${MODULE_ID}`,
    message: '@lego-medium/opentelemetry - shutdown success'
  })

  LOGGER.debug({
    action: `${MODULE_ID}`,
    message: 'End'
  })
})


