import { Description, Example, Required } from '@tsed/schema'

export class ToggleOptions {
  @Required()
  @Example('firstNameTextField', 'grid.row(0).col(0)')
  @Description('targetKey refers to the intended target to manipulate.')
  targetKey: string

  @Required()
  @Example('value', 'validation.latest')
  @Description(
    '`property` refers to the intended property to mutate. This can be represented as a JSONPath expression.',
  )
  property: string = 'value'
}
