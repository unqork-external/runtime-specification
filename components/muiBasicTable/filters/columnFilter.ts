import { Description, Required } from '@tsed/schema'

import { Unknown } from '../../../../decorators/schema'

export class ColumnFilter {
  @Required()
  @Description('ID of the column to filter')
  id: string

  @Required()
  @Unknown()
  @Description('Value of the filter')
  value: unknown
}
