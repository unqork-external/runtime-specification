import { Default, Description, Example, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class ParseFormulaOptions extends TargetedOperationOptions {
  @Required()
  @Description('Formula that will be applied')
  @Example('Some examples we can use: [ "=CONCATENATE(A,B)", "=A*5", "=GET(A, `MyParam`)" ]')
  formula: string

  @Required()
  @Description('Property that will receive the final value after parsing the formula')
  @Default('value')
  property: string = 'value'
}
