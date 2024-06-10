import { Description, Required } from '@tsed/schema'

export class ColumnFilter {
  @Required()
  @Description('ID of the column to filter')
  id: string

  @Required()
  @Description('Value of the filter')
  value: unknown
}
