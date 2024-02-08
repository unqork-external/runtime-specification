import { Description, Property } from '@tsed/schema'

export class TableToGoFirstPageOperationOptions {
  @Description('The key for the component we want to perform the operation')
  @Property()
  targetKey: string
}
