import { Description, Example, Required } from '@tsed/schema'

export class TableClearOperationOptions {
  @Required()
  @Description('Key of the Table component to apply the clear operation')
  public targetKey: string
}
