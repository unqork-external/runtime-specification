import { Description } from '@tsed/schema'

export class TableRemoveRowsOperationOptions {
  @Description('A component key or target syntax for getting a component')
  targetKey: string

  @Description('Component key, target key for the rows we want to remove')
  targetRowKeys?: string[]

  @Description('Index for the rows we want to remove')
  targetIndexes?: number[]
}
