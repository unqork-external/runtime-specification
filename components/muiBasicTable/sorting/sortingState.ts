import { Property } from '@tsed/schema'

export class SortingState {
  @Property()
  id: string

  @Property()
  desc: boolean
}
