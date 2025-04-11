import { DiscriminatorValue, Required } from '@tsed/schema'

import { GoGoGadgetClipboardOperationOptions } from './goGoGadgetClipboard.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Go Go Gadget Clipboard')
@DiscriminatorValue(OperationTypes.GO_GO_GADGET_CLIPBOARD)
@Alpha()
@AutogenDisabled()
export class GoGoGadgetClipboardOperation extends Operation<OperationTypes.GO_GO_GADGET_CLIPBOARD> {
  public type = OperationTypes.GO_GO_GADGET_CLIPBOARD as const

  @Required()
  public options: GoGoGadgetClipboardOperationOptions = new GoGoGadgetClipboardOperationOptions()
}
