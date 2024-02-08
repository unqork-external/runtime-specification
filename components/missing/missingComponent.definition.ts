import { DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface'

@DiscriminatorValue('__missing__')
export class MissingComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: '__missing__' = '__missing__' as const

  @Property()
  previousType: string
}
