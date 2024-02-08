import { Property } from '@tsed/schema'

export class RowPinningState {
  @Property()
  top: string[]
  @Property()
  bottom: string[]
}
