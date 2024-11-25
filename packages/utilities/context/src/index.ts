/**
 * 
 */
const MODULE_ID = '@lego-medium-configuration-index'
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import {
  configurationModule,
} from '@lego-medium/configuration'

import { IContext } from './interface'

let context: IContext

const initialize = async (): Promise<IContext> => {
  try {
    LOGGER.debug({
      action: initialize.name,
      message: `Start`
    })
    const CONFIGURATION = configurationModule.getConfiguration()
    context = {
      configuration: CONFIGURATION
    }
    const RET_VAL = getContext()
    return RET_VAL
  } catch (error) {
    LOGGER.error({
      action: initialize.name,
      message: `Cought error: ${error}`,
    })
    throw error
  }
}
const getContext = () => {
  return context;
}

export * from './interface'

export const contextModule = {
  initialize,
  getContext,
}
