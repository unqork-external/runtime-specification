import { CollectionOf, Property } from '@tsed/schema'

export class RowPinningState {
  @CollectionOf(String)
  top: string[]

  @CollectionOf(String)
  bottom: string[]
}
