import { Optional } from '@tsed/schema'

import { StandardArrayNestable } from '../../nestables'

export class LayoutNestable {
  @Optional()
  childIds: StandardArrayNestable = new StandardArrayNestable()
}
