/**
 * 
 * 
**/
import { winston } from '@lego-medium/wrappers-winston'
import { lodash } from '@lego-medium/wrappers-lodash'

import * as util from 'util'

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

const level = () => {
  const env = process.env?.NODE_ENV || 'development'
  const isDevelopment = env.toLowerCase() === 'development' || env.toLowerCase() === 'dev'
  let initialLevel = isDevelopment ? 'debug' : 'info'
  return process.env?.LOG_LEVEL?.toLowerCase() || initialLevel
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'grey',
}

winston.addColors(colors)

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
]

const constructMessage = (item: any) => {
  let retVal = ''
  const MESSAGE = `\n${item.timestamp} ${item.level}: ${item.message}`
  retVal = `${retVal}${MESSAGE}`

  if (
    !lodash.isEmpty(item?.metadata?.data)
  ) {
    const MESSAGE_DATA = `${util.inspect(item?.metadata?.data, {
      showHidden: false,
      depth: null,
      colors: true,
    })}`
    retVal = `${retVal}\n${MESSAGE_DATA}`
  }
  return retVal
}

const LOGGER_FORMAT = winston.format.combine(
  winston.format.metadata(),
  winston.format.json(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((item) => `${constructMessage(item)}`)
)

const LOGGER = winston.createLogger({
  level: level(),
  levels,
  format: LOGGER_FORMAT,
  transports,
})

interface LogRecord {
  action: string,
  message?: string,
  data?: object,
}

class WinstonLoggerExtended {

  id: string
  format: winston.Logform.Format
  logger: winston.Logger

  constructor(
    id: string,
  ) {
    this.id = id;
  }

  _constructMessage(
    params: LogRecord,
  ) {
    let retVal = `[${params?.action}]`
    if (
      !lodash.isEmpty(params?.message)
    ) {
      retVal = `${retVal} ${params?.message}`
    }
    return retVal
  }

  _constructMetadata(
    params: {
      action: string,
      message?: string,
      data?: object,
    },
  ) {
    const RET_VAL = {
      _file: this.id,
      action: params?.action,
      data: params?.data,
    }
    return RET_VAL
  }

  info(
    params: LogRecord,
  ) {
    const MESSAGE = this._constructMessage(params)
    const METADATA = this._constructMetadata(params)
    LOGGER.info(MESSAGE, METADATA)
  }

  debug(
    params: LogRecord,
  ) {
    const MESSAGE = this._constructMessage(params)
    const METADATA = this._constructMetadata(params)
    LOGGER.debug(MESSAGE, METADATA)
  }

  warn(
    params: LogRecord,
  ) {
    const MESSAGE = this._constructMessage(params)
    const METADATA = this._constructMetadata(params)
    LOGGER.warn(MESSAGE, METADATA)
  }

  error(
    params: LogRecord,
  ) {
    const MESSAGE = this._constructMessage(params)
    const METADATA = this._constructMetadata(params)
    LOGGER.error(MESSAGE, METADATA)
  }

}

export const getLogger = (id: string) => {
  const RET_VAL = new WinstonLoggerExtended(id)
  return RET_VAL
}
