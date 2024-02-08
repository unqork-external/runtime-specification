import { Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { ProtectedFieldEvents } from './protectedField.events'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { InputField } from '../../componentComposition/input/component.input'

@DiscriminatorValue('password')
export class ProtectedFieldComponentDefinition extends BaseComponentDefinition {
  @Required()
  @Description('Type of the component.')
  type: 'password' = 'password' as const

  @Property(Display)
  @Description('Display settings of the protected field.')
  display: Display = new Display()

  @Property(InputField)
  @Description('Field settings of the protected field.')
  field: InputField = new InputField()

  @Description('Value of the protected field.')
  declare value: string

  @Property()
  declare eventHandlers: ProtectedFieldEvents | undefined
}
