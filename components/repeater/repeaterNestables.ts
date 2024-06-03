import { Description, Property } from '@tsed/schema'

import { ChildrenNestables } from './childrenNestables'
import { NestableDef } from '../../nestables'

export class RepeaterNestables extends NestableDef {
  @Property()
  @Description('The children nestables')
  children = new ChildrenNestables()
}
