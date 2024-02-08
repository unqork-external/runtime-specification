import { DiscriminatorValue, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Field } from '../../componentComposition'

@DiscriminatorValue('dataworkflow')
export class DataWorkflowComponentDefinition extends BaseComponentDefinition {
  @Property()
  type: 'dataworkflow' = 'dataworkflow' as const

  @Property(Field)
  field: Field = new Field()

  @Property()
  triggerType: string
}
