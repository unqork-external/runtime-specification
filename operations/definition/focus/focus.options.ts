import { Description, Example, Required } from '@tsed/schema'

export class FocusOperationOptions {
  @Required()
  @Description('key of target')
  @Example('textfield')
  declare targetKey: string
}
