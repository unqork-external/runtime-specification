import { Description, Example, Required } from '@tsed/schema'

export class TableClearOperationOptions {
  @Required()
  @Description('key of the table to apply the clear operation')
  public targetKey: string
}
