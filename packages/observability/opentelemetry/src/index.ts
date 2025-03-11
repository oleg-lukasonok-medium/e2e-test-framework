/**
 *
 **/
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import * as nodeSDKModule from './node-sdk'

const initialize = async () => {
  try {
    await nodeSDKModule.initialize()
    LOGGER.info({
      action: initialize.name,
      message: `nodeSDKModule - initialized`,
    })
  } catch (error) {
    LOGGER.error({
      action: initialize.name,
      message: `Caught error: ${error}`,
    })
  }
}

await initialize()

export { nodeSDKModule }
