import { Description, Property } from '@tsed/schema'

import { Nestable, NestableType } from '../../nestables'

export class ChildrenNestables extends Nestable {
  @Property()
  @Description('The children of the nestables')
  propertyName: string = 'children'

  @Property()
  @Description('The type of the nestables')
  type: NestableType = NestableType.MATRIX
}
