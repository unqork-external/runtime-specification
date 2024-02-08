import { Any, Default, Description, Example, Property, Required } from '@tsed/schema'

import { trimAll } from '../../../../utilities'
import { BaseOperationOptions } from '../../interface'

@Description(
  trimAll(`
  SET_PROPERTY will mutate a specific property on a specific target to a specific value. 
  Optionally, if shouldOverwrite is set to false and if a value is already existing on the targeted property, 
  then the Operation will do nothing and exit.
`),
)
export class SetPropertyOptions extends BaseOperationOptions {
  @Required()
  @Property(String)
  @Example('firstNameTextField', 'grid.row(0).col(0)')
  @Description(
    trimAll(`
    \`targetKey\` refers to the intended target to manipulate.
    Can work on an array of targetKeys as well. 
  `),
  )
  declare targetKey: string | string[] | any // to not cause type errors which make me change lots of stuff.

  @Required()
  @Example('value', 'validation.latest')
  @Description(
    trimAll(
      `\`property\` refers to the intended property to mutate. This can be represented as a JSONPath expression.`,
    ),
  )
  property: string = 'value'

  @Any()
  @Description(
    trimAll(`
    The value refers to the intended value to mutate the intended property to. 
  `),
  )
  declare value: unknown

  @Default(true)
  @Description(
    trimAll(`
    shouldOverwrite refers to the type of behavior that SET_PROPERTY should emulate.
    If true, SET_PROPERTY will overwrite the value located at the intended property of the target regardless of if the intended property is set.
    If false, SET_PROPERTY will check if the property's value is set, and if so, SET_PROPERTY will exit.
  `),
  )
  shouldOverwrite?: boolean = true
}
