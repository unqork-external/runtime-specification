import { Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class GoGoGadgetClipboardOperationOptions extends OperationOptions {
  @Required()
  targetKey: string

  @Required()
  property: string = 'value'
}
