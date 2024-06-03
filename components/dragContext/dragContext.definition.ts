import { Required, DiscriminatorValue, Description, CollectionOf, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { Interactions } from '../../interactions/interactions'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('dragContext')
export class DragContextComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'dragContext' = 'dragContext' as const

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Property(Display)
  display: Display = new Display()

  @Property(Interactions)
  interactions?: Interactions

  @Description('Nestable information for dragContext')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child ids for nestable references')
  childIds: string[] = []
}
