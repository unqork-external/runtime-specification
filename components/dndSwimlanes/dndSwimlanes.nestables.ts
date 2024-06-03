import { Property } from '@tsed/schema'

import { NestableDef } from '../../nestables/nestable.definition'
import { Nestable, NestableType } from '../../nestables/nestable.types'

export class DndSwimlanesNestables extends NestableDef {
  @Property()
  rows = new ItemsNestable()
  @Property()
  placeholder = new PlaceholderNestable()
}

export class PlaceholderNestable extends Nestable {
  @Property()
  propertyName: string = 'placeholder'

  @Property()
  type: NestableType = NestableType.MATRIX

  @Property()
  children: string = 'placeholderComponents'
}

export class ItemsNestable extends Nestable {
  @Property()
  propertyName: string = 'rows'

  @Property()
  type: NestableType = NestableType.MATRIX

  @Property()
  children: string = 'components'
}
