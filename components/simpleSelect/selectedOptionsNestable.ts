import { Property } from '@tsed/schema'

import { Nestable, NestableType } from '../../nestables'

export class SelectedOptionsNestable extends Nestable {
  @Property()
  propertyName: string = 'selected'

  @Property()
  type: NestableType = NestableType.ARRAY

  @Property()
  children: string = 'selectedOptions'
}
