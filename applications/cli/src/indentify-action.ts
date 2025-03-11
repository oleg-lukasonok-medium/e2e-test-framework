/**
 *
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { ICliAction } from './interface'

export const identifyAction = (): ICliAction => {
  try {
    const ARGUMENTS = process.argv
    LOGGER.debug({
      action: identifyAction.name,
      data: {
        ARGUMENTS,
      },
    })
    const ACTION = ARGUMENTS[2] ? ARGUMENTS[2] : '--help'
    const PARAMETERS_AS_ARRAY = ARGUMENTS.slice(3, ARGUMENTS.length)
    const PARAMETERS_AS_STR = PARAMETERS_AS_ARRAY.join(' ')
    const RET_VAL = {
      action: ACTION,
      parametersAsString: PARAMETERS_AS_STR,
      parametersAsArray: PARAMETERS_AS_ARRAY,
    }
    LOGGER.debug({
      action: identifyAction.name,
      data: {
        RET_VAL,
      },
    })
    return RET_VAL
  } catch (error) {
    LOGGER.error({
      action: identifyAction.name,
      message: `Cought error: ${error}`,
    })
    throw error
  }
}
