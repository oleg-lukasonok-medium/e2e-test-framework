/**
 *
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { ICliAction } from '../interface'

import { processActionHelp } from './help'

export const processAction = async (action: ICliAction): Promise<void> => {
  try {
    LOGGER.debug({
      action: processAction.name,
      message: 'START',
    })
    switch (action?.action) {
      case '--help':
        await processActionHelp()
        break
      default:
        const ERROR_MESSAGE = `Provided action ${action?.action} is not supported!`
        throw ERROR_MESSAGE
    }
    LOGGER.debug({
      action: processAction.name,
      message: 'FINISH',
    })
  } catch (error) {
    LOGGER.error({
      action: processAction.name,
      data: {
        action: action,
      },
    })
    throw error
  }
}
