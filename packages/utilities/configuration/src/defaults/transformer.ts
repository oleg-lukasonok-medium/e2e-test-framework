/**
 * 
 *
 * 
**/
export const CONFIGURATION_RAW_PREFIX_DEFAULTS = 'DEFAULTS'

import { ICFG_Defaults } from './schema'

export const transformFromConfigurationRaw = (
  configurationRaw: any,
): ICFG_Defaults => {
  const RET_VAL = {
    messagesToBeSent: configurationRaw.DEFAULTS_MESSAGES_TO_BE_SENT,
  }
  return RET_VAL
}
