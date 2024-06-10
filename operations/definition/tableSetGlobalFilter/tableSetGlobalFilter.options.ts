import { Description, Required } from '@tsed/schema'

export class TableSetGlobalFilterOperationOptions {
  @Required()
  @Description('Key of the Table component to apply filters across all columns')
  targetKey: string

  @Required()
  @Description('Value to be filtered across all columns of the Table component')
  filter: string
}
