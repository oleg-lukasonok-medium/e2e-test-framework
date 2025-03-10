/**
 *
 */
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node'
import { NodeSDK } from '@opentelemetry/sdk-node'

let instance: NodeSDK

export const initialize = (): NodeSDK => {
  if (!instance) {
    instance = new NodeSDK({
      instrumentations: [getNodeAutoInstrumentations()],
    })
    instance.start()
  }
  return instance
}

export const getInstance = () => {
  if (!instance) {
    const ERROR_MESSAGE = `You need to initialize sdk first`
    throw ERROR_MESSAGE
  }
  return instance
}
