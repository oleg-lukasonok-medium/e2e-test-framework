/**
 * 
 *
 * 
**/
const MODULE_ID = `${import.meta.url}`
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
    console.log(VALIDATION_RESULT)
    const ERROR_MESSAGE = `Cought error while validating configuration - error: ${VALIDATION_RESULT?.error}`
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
export { CONFIGURATION_RAW_PREFIX_AWS_ACCOUNT, ICFG_AwsAccount } from './aws-accounts'

export const configurationModule = {
  load,
  loadRaw,
  getConfiguration,
  getRaw,
}
