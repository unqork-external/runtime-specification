import { Description, Required, CollectionOf } from '@tsed/schema'

export class TableRemoveRowsOperationOptions {
  @Description('Key of the table component to remove rows')
  @Required()
  targetKey: string

  @Description('Index(es) for the row(s) we want to remove')
  @Required()
  @CollectionOf(Number)
  targetIndexes?: number[]
}
