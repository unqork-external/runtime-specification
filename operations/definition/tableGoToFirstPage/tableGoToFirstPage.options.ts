import { Description, Required } from '@tsed/schema'

export class TableGoToFirstPageOperationOptions {
  @Description('Key of the Table component to change pagination position of')
  @Required()
  targetKey: string
}
