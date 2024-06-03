import { Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { Nestable, NestableType } from '../../nestables'

@DiscriminatorValue('basicDropZone')
export class BasicDropZoneComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'basicDropZone' = 'basicDropZone' as const

  @Property(Display)
  display: Display = new Display()

  @Property()
  @Property()
  droppedKeys: string[] = []

  @Property()
  otherZone: string[] = []

  @Description('Nestable information for panel')
  nestables = {
    droppedKeys: new DroppedKeysNestable(),
    otherZone: new OtherZoneNestable(),
  }

  @Description('Child ids for nestable references')
  zone: string[] = []
}

export class DroppedKeysNestable extends Nestable {
  @Property()
  propertyName: string = 'droppedKeys'

  @Property()
  type: NestableType = NestableType.ARRAY
}

export class OtherZoneNestable extends Nestable {
  @Property()
  propertyName: string = 'otherZone'

  @Property()
  type: NestableType = NestableType.ARRAY
}
