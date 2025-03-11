/**
 *
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { Given, Then } from '@cucumber/cucumber'

import { lodash } from '@lego-medium/wrappers-lodash'

import { expect } from '@lego-medium/wrappers-chai'

import {
  CONFIGURATION_RAW_PREFIX_AWS_ACCOUNT,
  configurationModule,
} from '@lego-medium/configuration'

import { WorldExtended } from '@lego-medium/cucumber-extensions'

Given(
  'configuration raw contains awsAccounts keys',
  {
    timeout: configurationModule.getConfiguration()?.cucumber?.step?.timeout,
  },
  async function (this: WorldExtended) {
    const ACTION_NAME = this.getActionName()
    LOGGER.debug({
      action: ACTION_NAME,
    })
    const RAW = configurationModule.getRaw()
    const RAW_KEYS = Object.keys(RAW)
    const RAW_KEYS_AWS = RAW_KEYS.filter((tmpKey: string) => {
      return (
        true &&
        !lodash.isEmpty(tmpKey) &&
        lodash.startsWith(tmpKey, CONFIGURATION_RAW_PREFIX_AWS_ACCOUNT)
      )
    })
    expect(RAW_KEYS_AWS).to.not.be.empty
  },
)

Then(
  'e2e-system-tests can load configuration?.awsAccounts',
  {
    timeout: configurationModule.getConfiguration()?.cucumber?.step?.timeout,
  },
  async function (this: WorldExtended) {
    const ACTION_NAME = this.getActionName()
    LOGGER.debug({
      action: ACTION_NAME,
    })
    const CONFIGURATION = configurationModule.getConfiguration()
    const CONFIGURATION_AWS_ACCOUNTS = CONFIGURATION?.awsAccounts
    expect(CONFIGURATION_AWS_ACCOUNTS).to.not.be.empty
  },
)
