/**
 * 
 *
 * 
**/
import {
  Joi,
} from '@lego-medium/wrappers-joi'

import {
  schema as schema4Cucumber,
  ICFG_Cucumber,
} from './cucumber'

import {
  schema as schema4Defaults,
  ICFG_Defaults,
} from './defaults'

import {
  schema as schema4AwsAccount,
  ICFG_AwsAccount,
} from './aws-accounts'

const REQUIRED_MIN_OF_AWS_ACCOUNTS = 1

export const schema = Joi.object({
  cucumber: Joi.object(schema4Cucumber).required(),
  defaults: Joi.object(schema4Defaults).required(),
  awsAccounts: Joi.array()
    .items(schema4AwsAccount)
    .min(REQUIRED_MIN_OF_AWS_ACCOUNTS),
})

export interface IConfiguration {
  cucumber: ICFG_Cucumber,
  defaults: ICFG_Defaults,
  awsAccounts: Array<ICFG_AwsAccount>,
}
