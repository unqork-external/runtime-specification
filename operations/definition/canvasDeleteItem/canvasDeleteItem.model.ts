import { DiscriminatorValue, Required } from '@tsed/schema'

import { CanvasDeleteItemOperationOptions } from './canvasDeleteItem.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CANVAS_DELETE_ITEM)
export class CanvasDeleteItemOperation extends Operation<OperationTypes.CANVAS_DELETE_ITEM> {
  @Required()
  public options: CanvasDeleteItemOperationOptions = new CanvasDeleteItemOperationOptions()
}
