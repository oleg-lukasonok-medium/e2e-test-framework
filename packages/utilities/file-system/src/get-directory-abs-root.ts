/**
 *
 **/
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { getDirectoryAbsByFileUrl } from './get-directory-abs-by-file-url'

import { resolve } from 'path'

export const getDirectoryAbsRoot = () => {
  try {
    const DIRECTORY = getDirectoryAbsByFileUrl({
      fileUrl: import.meta?.url,
    })
    const RET_VAL = resolve(DIRECTORY, '../../../..')
    return RET_VAL
  } catch (error) {
    LOGGER.error({
      action: getDirectoryAbsRoot.name,
      message: `Cought errror: ${error}`,
    })
    throw error
  }
}
