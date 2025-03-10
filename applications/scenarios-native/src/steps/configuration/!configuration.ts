/**
 *
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { Given, Then } from '@cucumber/cucumber'

import { expect } from '@lego-medium/wrappers-chai'

import { configurationModule } from '@lego-medium/configuration'

import { WorldExtended } from '@lego-medium/cucumber-extensions'

Given(
  'configuration raw is provided',
  {
    timeout: configurationModule.getConfiguration()?.cucumber?.step?.timeout,
  },
  async function (this: WorldExtended) {
    const RAW = configurationModule.getRaw()
    expect(RAW).to.not.be.empty
  },
)

Then(
  'e2e-system-tests can load configuration',
  {
    timeout: configurationModule.getConfiguration()?.cucumber?.step?.timeout,
  },
  async function (this: WorldExtended) {
    const ACTION_NAME = this.getActionName()
    LOGGER.debug({
      action: ACTION_NAME,
    })
    const CONFIGURATION = await configurationModule.getConfiguration()
    expect(CONFIGURATION).to.not.be.empty
  },
)
