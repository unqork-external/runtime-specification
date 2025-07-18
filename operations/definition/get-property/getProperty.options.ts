import { Description, Example, Property, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema'
import { OperationOptions } from '../../interface'

@TrimmedDescription(`
  GET_PROPERTY will get a specific property on a specific target and add it to the operationContext.
`)
export class GetPropertyOptions extends OperationOptions {
  @Required()
  @Property(String)
  @Example('firstNameTextField', 'grid.row(0).col(0)')
  @Description('`targetKey` refers to the intended target to manipulate. Can work on an array of targetKeys as well.')
  targetKey: string | string[] | any // to not cause type errors which make me change lots of stuff.

  @Required()
  @Example('value', 'validation.latest')
  @Description('`property` refers to the intended property to get. This can be represented as a JSONPath expression.')
  property: string = 'value'
}
