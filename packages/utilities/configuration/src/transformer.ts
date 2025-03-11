/**
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

import {
  transformFromConfigurationRaw as transformFromConfigurationRaw4AwsAccounts,
} from './aws-accounts'

export const transformFromConfigurationRaw = async (
  configurationRaw: any,
): Promise<IConfiguration> => {
  const RET_VAL = {
    cucumber: transformFromConfigurationRaw4Cucumber(configurationRaw),
    defaults: transformFromConfigurationRaw4Defaults(configurationRaw),
    awsAccounts: transformFromConfigurationRaw4AwsAccounts(configurationRaw),
  }
  return RET_VAL
}
