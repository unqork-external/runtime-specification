import { Property } from '@tsed/schema'

export class ColumnPinningState {
  @Property()
  left?: string[]
  @Property()
  right?: string[]
}
