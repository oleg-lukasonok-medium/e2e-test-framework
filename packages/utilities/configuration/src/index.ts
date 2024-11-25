/**
 * 
 *
 * 
**/
const MODULE_ID = '@lego-medium/configuration-src-index'
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import {
  schema,
  IConfiguration,
} from './schema'

import { loadRaw, getRaw } from './utils'
import { transformFromConfigurationRaw } from './transformer'

let configuration: IConfiguration;

const load = async () => {
  await loadRaw();
  const CONFIGURATION_RAW = getRaw();
  const CONFIGURATION = await transformFromConfigurationRaw(CONFIGURATION_RAW);
  const VALIDATION_RESULT = schema.validate(CONFIGURATION);
  if (
    VALIDATION_RESULT?.error
  ) {
    const ERROR_MESSAGE = 'Cought error while validating configuration!'
    LOGGER.error({
      action: load.name,
      message: ERROR_MESSAGE
    })
    throw VALIDATION_RESULT?.error;
  }
  configuration = CONFIGURATION;
}

const getConfiguration = (): IConfiguration => {
  return configuration
}

export { IConfiguration } from './schema'
export { ICFG_Cucumber } from './cucumber'
export { CONFIGURATION_RAW_PREFIX_DEFAULTS, ICFG_Defaults } from './defaults'

export const configurationModule = {
  load,
  loadRaw,
  getConfiguration,
  getRaw,
}
