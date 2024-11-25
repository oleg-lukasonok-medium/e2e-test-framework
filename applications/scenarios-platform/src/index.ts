/**
 * 
 */
const MODULE_ID = '@lego-medium/tests-native-index'
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

LOGGER.info({
  action: 'Hello World',
})
