import { Description, Example, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class ClearValidationErrorsOptions extends OperationOptions {
  @Required()
  @Example('textfield')
  @Description('key of the target which this operation will be applied')
  public targetKey: string
}
