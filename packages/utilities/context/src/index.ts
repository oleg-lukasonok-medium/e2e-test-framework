/**
 * 
 * 
**/
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import {
    IContext,
} from '@lego-medium/context-interfaces'

import {
    configurationModule,
} from '@lego-medium/configuration'

let context: IContext

const initialize = async (
    _params?: {
        skipNavifyAwsSsoSession?: boolean,
        skipNPeiEdgesKubeConfigDownload?: boolean,
        skipNiEdge?: boolean,
        skipVirtual?: boolean,
    }
): Promise<IContext> => {
    try {
        LOGGER.debug({
            action: initialize.name,
            message: `Start`
        })
        const CONFIGURATION = configurationModule.getConfiguration()
        context = {
            configuration: CONFIGURATION,
        }
        const RET_VAL = getContext()
        return RET_VAL
    } catch (error) {
        LOGGER.error({
            action: initialize.name,
            message: `Cought error: ${error}`,
        })
        throw error
    }
}


const getContext = () => {
    return context;
}

export const contextModule = {
    initialize,
    getContext,
}
