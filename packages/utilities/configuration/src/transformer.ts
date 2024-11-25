/**
 * 
 *
 * 
**/
import {
  IConfiguration,
} from './schema'

import {
  transformFromConfigurationRaw as transformFromConfigurationRaw4Cucumber,
} from './cucumber'
import {
  transformFromConfigurationRaw as transformFromConfigurationRaw4Defaults,
} from './defaults'

export const transformFromConfigurationRaw = async (
  configurationRaw: any,
): Promise<IConfiguration> => {
  const RET_VAL = {
    cucumber: transformFromConfigurationRaw4Cucumber(configurationRaw),
    defaults: transformFromConfigurationRaw4Defaults(configurationRaw),
  }
  return RET_VAL
}
