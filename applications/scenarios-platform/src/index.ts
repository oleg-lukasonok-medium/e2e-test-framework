/**
 * 
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

LOGGER.info({
  action: 'scenarios-platform',
})
