/**
 * 
 *
 * 
**/
import Joi from 'joi'

import {
  schema as schema4Cucumber,
  ICFG_Cucumber,
} from './cucumber'
import {
  schema as schema4Defaults,
  ICFG_Defaults,
} from './defaults'

export const schema = Joi.object({
  cucumber: Joi.object(schema4Cucumber).required(),
  defaults: Joi.object(schema4Defaults).required(),
})

export interface IConfiguration {
  cucumber: ICFG_Cucumber,
  defaults: ICFG_Defaults,
}
