/**
 * 
**/
import {
  Joi,
} from '@lego-medium/wrappers-joi'

const step = {
  timeout: Joi.number().required(),
}

export const schema = {
  step: Joi.object(step).required(),
}

export interface ICFG_Cucumber {
  step: {
    timeout: number,
  }
}
