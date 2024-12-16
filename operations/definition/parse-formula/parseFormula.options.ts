import { CollectionOf, Default, Description, Example, Ignore, Optional, Required } from '@tsed/schema'

import { InputRef } from '../../../inputs/inputRef'
import { OperationOptions } from '../../interface'

export class ParseFormulaOptions extends OperationOptions {
  @Required()
  @Description(
    `The target must to be a the string reference of the input that will receive the result of the formula operation over the array of reference inputs provided`,
  )
  public declare targetKey: string

  @Required()
  @Description('Formula that will be applied')
  @Example('Some examples we can use: [ "=CONCATENATE(A,B)", "=A*5", "=GET(A, `MyParam`)" ]')
  formula: string

  @Required()
  @Description('Property that will receive the final value after parsing the formula')
  @Default('value')
  property: string = 'value'

  @Ignore()
  @Optional()
  @Description('If true, convert yes/no and true/false string to booleans.')
  @Default(false)
  coerceBooleans?: boolean = false

  @Ignore()
  @Optional()
  @Description(
    'If true, invert the booleans. e.g. Centauri {disabled: true} needs to be inverted to Vega {executable: false, interactive: false}',
  )
  @Default(false)
  invertBooleans?: boolean = false
}
