/**
 * 
**/
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { config } from 'dotenv'

import { lodash } from '@lego-medium/wrappers-lodash'
import { ramda } from '@lego-medium/wrappers-ramda'

import { fileSystemModule } from '@lego-medium/file-system'

let raw: any

export const loadRaw = async () => {
  let fileEnvVars
  let fileEnvVarsCredentials
  try {
    if (
      lodash.isEmpty(process.env.E2E_TF_ENVIRONMENT)
    ) {
      const ERROR_MESSAGE = `Environment variable E2E_TF_ENVIRONMENT is missing.`
      throw ERROR_MESSAGE
    }
    const PATH_ABS_ROOT = fileSystemModule.getDirectoryAbsRoot()
    fileEnvVars = `${PATH_ABS_ROOT}/.env-${process.env.E2E_TF_ENVIRONMENT}`
    fileEnvVarsCredentials = `${PATH_ABS_ROOT}/.env-${process.env.E2E_TF_ENVIRONMENT}-credentials`
    const LOADED_ENV = config({ path: [fileEnvVars, fileEnvVarsCredentials] }).parsed
    raw = {
      ...process.env,
      LOADED_ENV,
    }
    if (
      !raw
    ) {
      const ERROR_MESSAGE = `Missing raw configuration - expected to be here: process.env.ENV_VARS_PATH ${process.env.ENV_VARS_PATH}`
      throw new Error(ERROR_MESSAGE)
    }
  } catch (error) {
    LOGGER.error({
      action: loadRaw.name,
      message: `Caught error: ${error}`,
      data: {
        fileEnvVars,
        fileEnvVarsCredentials,
      }
    })
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
