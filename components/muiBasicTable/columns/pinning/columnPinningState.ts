import { Property, CollectionOf } from '@tsed/schema'

export class ColumnPinningState {
  //left.items.type will be an string instead of an array in this case
  @CollectionOf(String)
  @Property()
  left?: string[]

  @CollectionOf(String)
  @Property()
  right?: string[]
}
