import { DiscriminatorValue, Required } from '@tsed/schema'

import { GoGoGadgetClipboardOperationOptions } from './goGoGadgetClipboard.options'
import { Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.GO_GO_GADGET_CLIPBOARD)
@Alpha()
export class GoGoGadgetClipboardOperation extends Operation<OperationTypes.GO_GO_GADGET_CLIPBOARD> {
  public type = OperationTypes.GO_GO_GADGET_CLIPBOARD as const

  @Required()
  public options: GoGoGadgetClipboardOperationOptions = new GoGoGadgetClipboardOperationOptions()
}
