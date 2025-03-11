/**
 *
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { configurationModule } from '@lego-medium/configuration'

import { identifyAction } from './indentify-action'

import { processAction } from './process-action'

(async () => {
  try {
    await configurationModule.load()
    const CLI_ACTION = identifyAction()
    LOGGER.debug({
      action: 'Triggered cli action',
      data: { CLI_ACTION },
    })
    await processAction(CLI_ACTION)
    process.exit()
  } catch (error) {
    console.log(`Cli action resulted in error: ${error}`)
    process.exit(-1)
  }
})()
