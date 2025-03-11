/**
 * 
**/
import {
  Joi,
} from '@lego-medium/wrappers-joi'

export const schema = {
  id: Joi.string().required(),
  alias: Joi.string().required(),
  credentials: {
    accessKey: Joi.string().required().description(`Specified by AWS_ACCOUNT_X_CREDENTIALS_ACCESS_KEY`),
    secretKey: Joi.string().required().description(`Specified by AWS_ACCOUNT_X_CREDENTIALS_SECRET_KEY`),
  }
}

export interface ICFG_AwsAccount {
  id: string
  alias: string
  credentials: {
    accessKey: string
    secretKey: string
  }
}
