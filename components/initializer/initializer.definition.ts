import { DiscriminatorValue, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'

@DiscriminatorValue('initializer')
export class InitializerComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'initializer' = 'initializer' as const
}
