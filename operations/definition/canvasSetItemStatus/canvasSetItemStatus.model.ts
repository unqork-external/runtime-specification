import { DiscriminatorValue, Required } from '@tsed/schema'

import { CanvasSetItemStatusOperationOptions } from './canvasSetItemStatus.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CANVAS_SET_ITEM_STATUS)
export class CanvasSetItemStatusOperation extends Operation<OperationTypes.CANVAS_SET_ITEM_STATUS> {
  @Required()
  public type = OperationTypes.CANVAS_SET_ITEM_STATUS as const

  @Required()
  public options: CanvasSetItemStatusOperationOptions = new CanvasSetItemStatusOperationOptions()
}
