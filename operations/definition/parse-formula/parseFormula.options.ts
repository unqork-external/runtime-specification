import { CollectionOf, Default, Description, Example, Required } from '@tsed/schema'

import { InputRef } from '../../../inputs/inputRef'

export class ParseFormulaOptions {
  @Required()
  @Description(
    `The target must to be a the string reference of the input that will receive the result of the formula operation over the array of reference inputs provided`,
  )
  public declare targetKey: string

  @CollectionOf(InputRef)
  @Description('Inputs must to have references to inputs that will be used by the formula')
  inputs: InputRef[]

  @Required()
  @Description('Formula that will be applied')
  @Example('Some examples we can use: [ "=CONCATENATE(A,B)", "=A*5", "=GET(A, `MyParam`)" ]')
  formula: string

  @Required()
  @Description('Property that will receive the final value after parsing the formula')
  @Default('value')
  property: string = 'value'
}
