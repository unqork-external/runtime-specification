import { Const, Description, DiscriminatorValue, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'

@DiscriminatorValue('hidden')
@TrimmedDescription(
  `The Hidden component component acts as a holding place for data in your application.
  It is extremely flexible, and can include any data type or data structure. It provides
  a way to store and pass data, and is not visible to end users.`,
)
export class HiddenComponentDefinition extends BaseComponentDefinition {
  @Const('hidden')
  type: 'hidden' = 'hidden' as const

  @Optional()
  @Description('Default value of hidden component.')
  defaultValue?: unknown
}
