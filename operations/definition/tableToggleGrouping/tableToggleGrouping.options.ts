import { Description, Required } from '@tsed/schema'

export class TableToggleGroupingOperationOptions {
  @Required()
  @Description('Key of the Table component to enable/disable grouping.')
  targetKey: string
}
