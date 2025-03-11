/**
 *
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

export interface ICliAction {
  action: string
  parametersAsString: string
  parametersAsArray: Array<any>
}

export const processActionHelp = (): void => {
  console.log(`
    Currently following library is supporting following actions: 

    pnpm run cli --help

    pnpm run opentelemetry:start
    pnpm run opentelemetry:stop

    pnpm run scenarios-native "<regex_2_features>"
    pnpm run scenarios-native "src/scenarios/configuration/*.feature"

    pnpm run scenarios-platform "<regex_2_features>"
    pnpm run scenarios-platform "src/scenarios/data-pipe/*/*.feature"

    `)
  LOGGER.debug({
    action: processActionHelp.name,
  })
}
