/**
 * 
 */
import Joi from 'joi'

export const schema = {
  messagesToBeSent: Joi.number().required(),
}

export interface ICFG_Defaults {
  messagesToBeSent: number,
}
