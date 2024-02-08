import { Optional, Property } from '@tsed/schema'

import { Nestable, NestableType } from './nestable.types'

export class StandardArrayNestable extends Nestable {
  @Property()
  propertyName: string = 'childIds'

  @Property()
  type: NestableType = NestableType.ARRAY

  @Optional()
  @Property()
  children?: string = 'components'
}
