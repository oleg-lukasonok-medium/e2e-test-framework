/**
 * 
 */
import { ICFG_Cucumber } from './schema'

export const transformFromConfigurationRaw = (
  configurationRaw: any,
): ICFG_Cucumber => {
  const RET_VAL = {
    step: {
      timeout: parseInt(configurationRaw?.CUCUMBER_STEP_TIMEOUT || 60000),
    },
  }
  return RET_VAL
}
