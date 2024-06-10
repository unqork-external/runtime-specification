import { Default, Description, Optional, Required } from '@tsed/schema'

export class SortingState {
  @Required()
  @Description('Column to be sorted.')
  id: string

  @Optional()
  @Default(false)
  @Description('Order in which the column should be sorted.')
  desc: boolean = false
}
