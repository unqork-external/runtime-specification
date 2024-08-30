import { Description, Required } from '@tsed/schema'

export class TableSetRowExpandedOperationOptions {
  @Required()
  @Description('Key of the Table component to target for row expansion.')
  targetKey: string

  @Required()
  @Description('The key of the parent row group to expand or collapse.')
  targetGroupRow: string

  @Required()
  @Description('Indicates if the parent row group should be expanded or collapsed.')
  isRowExpanded: boolean
}
