import { Required, DiscriminatorValue, Description, Property, Default, CollectionOf } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('legacyViewWrapper')
export class LegacyViewWrapperComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'legacyViewWrapper' = 'legacyViewWrapper' as const

  @Description('Child type controls which DOM elements the children components get wrapped with')
  @Default('module')
  @Property()
  childType: 'module' | 'workflow' = 'module'

  @CollectionOf(BaseComponentDefinition)
  components?: BaseComponentDefinition[]

  @Description('Nestable information for legacyViewWrapper')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child ids for nestable references')
  childIds: string[] = []
}
