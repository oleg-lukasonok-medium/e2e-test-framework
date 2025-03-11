/**
 *
 *
 *
 **/
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { fileURLToPath } from 'url'

import { dirname } from 'path'

export const getDirectoryAbsByFileUrl = (params: { fileUrl: string }) => {
  try {
    const FILE_NAME = fileURLToPath(params?.fileUrl)
    const RET_VAL = dirname(FILE_NAME)
    return RET_VAL
  } catch (error) {
    LOGGER.error({
      action: getDirectoryAbsByFileUrl.name,
      message: `Caught errror: ${error}`,
    })
    throw error
  }
}
