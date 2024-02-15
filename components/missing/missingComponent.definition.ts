import { Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface'

@DiscriminatorValue('__missing__')
export class MissingComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: '__missing__' = '__missing__' as const

  @Description('Type of the unsupported component')
  previousType: string

  @Description('Label of the unsupported component')
  previousLabel: string

  @Description('Key of the unsupported component')
  previousKey: string
}
