import { Property } from '@tsed/schema'

import { Nestable, NestableType } from '../../nestables'

export class OptionNestable extends Nestable {
  @Property()
  propertyName: string = 'optionKeys'

  @Property()
  type: NestableType = NestableType.ARRAY

  @Property()
  children: string = 'options'
}
