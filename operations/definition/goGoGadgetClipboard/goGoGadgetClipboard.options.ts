import { Required } from '@tsed/schema'

export class GoGoGadgetClipboardOperationOptions {
  @Required()
  targetKey: string

  @Required()
  property: string = 'value'
}
