import { Default, Description } from '@tsed/schema'

import { Nestable, NestableType } from '../../nestables'

export class ItemsNestable extends Nestable {
  @Default('itemKeys')
  @Description('Nestable property name.')
  propertyName: string = 'itemKeys'

  @Default(NestableType.ARRAY)
  @Description('Nestable type.')
  type: NestableType = NestableType.ARRAY

  @Default('items')
  @Description('Nestable children.')
  children: string = 'items'
}
