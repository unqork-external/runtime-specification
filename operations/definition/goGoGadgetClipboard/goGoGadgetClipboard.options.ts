import { Description, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class GoGoGadgetClipboardOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('Which property of the target should be copied to the clipboard')
  property: string = 'value'
}
