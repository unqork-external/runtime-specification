import { Description, Required } from '@tsed/schema'

export class TableGoToLastPageOperationOptions {
  @Required()
  @Description('Key of the Table component to change pagination position of')
  targetKey: string
}
