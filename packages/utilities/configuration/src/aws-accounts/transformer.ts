/**
 *
 **/
import { ramda } from '@lego-medium/wrappers-ramda'
import { getConfigurationRawKeysByTemplate } from '../utils'
import { ICFG_AwsAccount } from './schema'

export const CONFIGURATION_RAW_PREFIX_AWS_ACCOUNT = 'AWS_ACCOUNT'

const transformRawAccount = (
  _configurationRaw: any,
  rawAwsAccount: any,
): ICFG_AwsAccount => {
  const RET_VAL: ICFG_AwsAccount = {
    id: rawAwsAccount?.id,
    alias: rawAwsAccount?.alias,
    credentials: {
      accessKey: rawAwsAccount?.credentialsAccessKey,
      secretKey: rawAwsAccount?.credentialsSecretKey,
    }
  }
  return RET_VAL
}

const transformRawAccounts = (
  _configurationRaw: any,
  rawAccounts: Array<any>,
): Array<ICFG_AwsAccount> => {
  const RET_VAL: Array<any> = []
  if (!ramda.isNil(rawAccounts)) {
    for (let rawAccount of rawAccounts) {
      if (!ramda.isNil(rawAccount)) {
        RET_VAL.push(transformRawAccount(_configurationRaw, rawAccount))
      }
    }
  }
  return RET_VAL
}

export const transformFromConfigurationRaw = (
  _configurationRaw: any,
): Array<ICFG_AwsAccount> => {
  const RAW_AWS_ACCOUNTS = getConfigurationRawKeysByTemplate(
    CONFIGURATION_RAW_PREFIX_AWS_ACCOUNT,
    [
      'ID',
      'ALIAS',
      'CREDENTIALS_ACCESS_KEY',
      'CREDENTIALS_SECRET_KEY',
    ],
  )
  const RET_VAL = transformRawAccounts(_configurationRaw, RAW_AWS_ACCOUNTS)
  return RET_VAL
}
