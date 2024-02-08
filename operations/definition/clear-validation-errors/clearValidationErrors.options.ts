import { Description, Example, Required } from '@tsed/schema'

export class ClearValidationErrorsOptions {
  @Required()
  @Example('textfield')
  @Description('key of the target which this operation will be applied')
  public targetKey: string
}
