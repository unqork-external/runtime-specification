import { Description, Optional, Property, Required } from '@tsed/schema'

import { Nestable, NestableType } from '../../nestables'

export class ComboboxIconsNestable extends Nestable {
  @Property()
  propertyName: string = 'iconsKeys'

  @Property()
  type: NestableType = NestableType.ARRAY

  @Optional()
  children: string = 'icons'
}

export class ComboboxNestable {
  @Required()
  @Description('Nestable configuration for the `childIds` property.')
  iconsKeys: ComboboxIconsNestable = new ComboboxIconsNestable()
}
