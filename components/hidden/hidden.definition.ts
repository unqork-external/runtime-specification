import { Const, Description, Any, DiscriminatorValue, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Field } from '../../componentComposition'
@DiscriminatorValue('hidden')
export class HiddenComponentDefinition extends BaseComponentDefinition {
  @Const('hidden')
  @Description('Type of the component.')
  type: 'hidden' = 'hidden' as const

  @Property()
  @Description('Field settings of the hidden component.')
  field?: Field

  @Any()
  @Description('Value of the hidden field.')
  declare value?: unknown

  @Description('Default value of hidden component.')
  defaultValue?: unknown
}
