import { Const, DiscriminatorValue, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('initializer')
export class InitializerComponentDefinition extends BaseComponentDefinition {
  @Const('initializer')
  type: 'initializer' = 'initializer' as const

  @Property()
  declare signals: SignalTargets<'root'>
}
