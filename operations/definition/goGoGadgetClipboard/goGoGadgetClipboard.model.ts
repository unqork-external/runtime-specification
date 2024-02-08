import { DiscriminatorValue, Required } from '@tsed/schema'

import { GoGoGadgetClipboardOperationOptions } from './goGoGadgetClipboard.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.GO_GO_GADGET_CLIPBOARD)
export class GoGoGadgetClipboardOperation extends Operation<OperationTypes.GO_GO_GADGET_CLIPBOARD> {
  @Required()
  public options: GoGoGadgetClipboardOperationOptions = new GoGoGadgetClipboardOperationOptions()
}
