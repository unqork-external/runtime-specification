import { DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'

@DiscriminatorValue('testTextField')
export class TestTextFieldComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'testTextField' = 'testTextField' as const

  @Property()
  declare value: string
}
