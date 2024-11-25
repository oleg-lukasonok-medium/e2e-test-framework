/**
 * 
 *
 * 
**/
const MODULE_ID = '@lego-medium/configuration-src-utils'
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { config } from 'dotenv'

import { lodash } from '@lego-medium/wrappers-lodash'
import { ramda } from '@lego-medium/wrappers-ramda'


let raw: any

export const loadRaw = async () => {
  config({ path: process.env.ENV_VARS_PATH ? process.env.ENV_VARS_PATH : '.env-local' }).parsed
  raw = process.env;
  LOGGER.debug({
    action: loadRaw.name,
    message: 'Loaded raw configuration'
  })
  if (
    !raw
  ) {
    const ERROR_MESSAGE = `Missing raw configuration - expected to be here: process.env.ENV_VARS_PATH ${process.env.ENV_VARS_PATH}`
    throw new Error(ERROR_MESSAGE)
  }
}

export const getRaw = () => {
  return raw
}

export const getConfigurationRawKeysByTemplate = (
  template: string,
  items: Array<string> = []
): Array<any> => {
  let values: Array<any> = []
  let index: number = 0
  let value: any
  const RAW = getRaw()
  const _reducer = (tmpValue: any, item: string) => ({
    ...tmpValue,
    ...(
      RAW[`${template}_${index}_${item}`] ?
        {
          [lodash.camelCase(item)]: RAW[`${template}_${index}_${item}`],
        }
        : {}
    ),
  })
  do {
    const defaultValue = RAW[`${template}_${index}`];
    value = items.reduce(_reducer, {});
    if (
      ramda.isEmpty(value)
    ) {
      value = defaultValue
    }
    if (
      value !== undefined
    ) {
      values.push(value)
    }
    index++
  } while (value !== undefined)
  return values
};
