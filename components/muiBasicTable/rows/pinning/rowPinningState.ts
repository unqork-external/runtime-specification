import { CollectionOf, Description, Optional } from '@tsed/schema'

export class RowPinningState {
  @Optional()
  @Description('List of rows to pin to the top of the Table component.')
  @CollectionOf(String)
  top: string[]

  @Optional()
  @Description('List of rows to pin to the bottom of the Table component.')
  @CollectionOf(String)
  bottom: string[]
}
