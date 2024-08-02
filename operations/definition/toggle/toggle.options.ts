import { Description, Example, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class ToggleOptions extends TargetedOperationOptions {
  @Required()
  @Example('value', 'validation.latest')
  @Description(
    '`property` refers to the intended property to mutate. This can be represented as a JSONPath expression.',
  )
  property: string = 'value'
}
