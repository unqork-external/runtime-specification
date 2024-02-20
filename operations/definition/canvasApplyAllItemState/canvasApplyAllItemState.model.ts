import { DiscriminatorValue, Required } from '@tsed/schema'

import { CanvasApplyAllItemStateOperationOptions } from './canvasApplyAllItemState.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CANVAS_APPLY_ALL_ITEM_STATE)
export class CanvasApplyAllItemStateOperation extends Operation<OperationTypes.CANVAS_APPLY_ALL_ITEM_STATE> {
  public type = OperationTypes.CANVAS_APPLY_ALL_ITEM_STATE as const

  @Required()
  public options: CanvasApplyAllItemStateOperationOptions = new CanvasApplyAllItemStateOperationOptions()
}
