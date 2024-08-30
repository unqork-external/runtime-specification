import { Default, Description, Example, Optional, Property, Required } from '@tsed/schema'

import { TrimmedDescription, Unknown } from '../../../../decorators/schema'

@TrimmedDescription(`
  SET_PROPERTY will mutate a specific property on a specific target to a specific value.
  Optionally, if shouldOverwrite is set to false and if a value is already existing on the targeted property,
  then the Operation will do nothing and exit.
`)
export class SetPropertyOptions {
  @Required()
  @Property(String)
  @Example('firstNameTextField', 'grid.row(0).col(0)')
  @Description('`targetKey` refers to the intended target to manipulate. Can work on an array of targetKeys as well.')
  targetKey: string | string[] | any // to not cause type errors which make me change lots of stuff.

  @Required()
  @Example('value', 'validation.latest')
  @Description(
    '`property` refers to the intended property to mutate. This can be represented as a JSONPath expression.',
  )
  property: string = 'value'

  @Unknown()
  @Description('The value refers to the intended value to mutate the intended property to.')
  declare value: unknown

  @Default(true)
  @TrimmedDescription(`
    shouldOverwrite refers to the type of behavior that SET_PROPERTY should emulate.
    If true, SET_PROPERTY will overwrite the value located at the intended property of the target regardless of if the intended property is set.
    If false, SET_PROPERTY will check if the property's value is set, and if so, SET_PROPERTY will exit.
  `)
  shouldOverwrite?: boolean = true

  @Optional()
  @TrimmedDescription(
    `
    Temporary way to resolve a value as syntax. Currently only used for auto generation of CSMs.
    Runtime team to revisit.
  `,
  )
  resolveSyntax?: boolean

  @Optional()
  @TrimmedDescription(
    `
    If true, SET_PROPERTY will skip interpolation
  `,
  )
  skipInterpolation?: boolean
}
