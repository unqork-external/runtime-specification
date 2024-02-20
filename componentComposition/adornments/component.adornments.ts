import { CollectionOf, Default, Description, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface'
import { Nestable, NestableDef, NestableType } from '../../nestables'

export class LeftAdornmentNestable extends Nestable {
  @Default('left')
  @Description('Nestable property name.')
  propertyName: string = 'left'

  @Default(NestableType.ARRAY)
  @Description('Nestable type.')
  type: NestableType = NestableType.ARRAY

  @Default('adornments.left')
  @Description('Nestable children.')
  children: string = 'adornments.left'
}

export class RightAdornmentNestable extends Nestable {
  @Default('right')
  @Description('Nestable property name.')
  propertyName: string = 'right'

  @Default(NestableType.ARRAY)
  @Description('Nestable type.')
  type: NestableType = NestableType.ARRAY

  @Default('adornments.right')
  @Description('Nestable children.')
  children: string = 'adornments.right'
}

export class StandardAdornmentsProperties {
  @CollectionOf(() => BaseComponentDefinition)
  left: BaseComponentDefinition[] = []

  @CollectionOf(() => BaseComponentDefinition)
  right: BaseComponentDefinition[] = []
}

export class StandardAdornmentsAsNestables extends NestableDef {
  @Property(LeftAdornmentNestable)
  left: LeftAdornmentNestable = new LeftAdornmentNestable()

  @Property(RightAdornmentNestable)
  right: RightAdornmentNestable = new RightAdornmentNestable()
}
