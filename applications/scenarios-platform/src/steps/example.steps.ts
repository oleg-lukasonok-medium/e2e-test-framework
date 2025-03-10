/**
 * 
 */
const MODULE_ID = `${import.meta.url}`
import { getLogger } from '@lego-medium/loggers'
const LOGGER = getLogger(MODULE_ID)

import { Given, When, Then } from '@cucumber/cucumber'

import assert from 'assert'

import { WorldExtended } from '@lego-medium/cucumber-extensions'

let num1: number
let num2: number
let result: number

Given(
  'I have the numbers {int} and {int}',
  async function (
    this: WorldExtended,
    a: number,
    b: number,
  ) {
    const ACTION = this.getActionName()
    num1 = a
    num2 = b
    LOGGER.info({
      action: `${MODULE_ID} / ${ACTION}`,
      data: {
        num1,
        num2,
      }
    })
  }
)

When(
  'I add the numbers',
  async function (
    this: WorldExtended,
  ) {
    const ACTION = this.getActionName()
    result = num1 + num2
    LOGGER.info({
      action: `${MODULE_ID} / ${ACTION}`,
      data: {
        result,
      }
    })
  }
)

Then(
  'the result should be {int}',
  async function (
    this: WorldExtended,
    expected: number,
  ) {
    const ACTION = this.getActionName()
    LOGGER.info({
      action: `${MODULE_ID} / ${ACTION}`,
      data: {
        expected,
      }
    })
    assert.strictEqual(result, expected)
  }
)
