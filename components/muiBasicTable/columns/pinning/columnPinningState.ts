import { CollectionOf, Default, Description, Optional } from '@tsed/schema'

export class ColumnPinningState {
  @Optional()
  @Default([])
  @CollectionOf(String)
  @Description('List of columns to pin to the left of the Table component.')
  left?: string[]

  @Optional()
  @Default([])
  @CollectionOf(String)
  @Description('List of columns to pin to the right of the Table component.')
  right?: string[]
}
