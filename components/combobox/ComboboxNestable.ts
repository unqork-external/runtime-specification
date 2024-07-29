import { Description, Optional, Property, Required } from '@tsed/schema'

import { Nestable, NestableType } from '../../nestables'

export class ComboboxIconsNestable extends Nestable {
  @Property()
  propertyName: string = 'childIds'

  @Property()
  type: NestableType = NestableType.ARRAY

  @Optional()
  children?: string = 'icons'
}

export class ComboboxNestable {
  @Required()
  @Description('Nestable configuration for the `childIds` property.')
  childIds: ComboboxIconsNestable = new ComboboxIconsNestable()
}
