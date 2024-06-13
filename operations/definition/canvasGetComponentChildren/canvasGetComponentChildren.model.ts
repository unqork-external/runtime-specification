import { DiscriminatorValue, Required } from '@tsed/schema'

import { CanvasGetComponentChildrenOperationOptions } from './canvasGetComponentChildren.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CANVAS_GET_COMPONENT_CHILDREN)
export class CanvasGetComponentChildrenOperation extends Operation<OperationTypes.CANVAS_GET_COMPONENT_CHILDREN> {
  @Required()
  public type = OperationTypes.CANVAS_GET_COMPONENT_CHILDREN as const

  @Required()
  public options: CanvasGetComponentChildrenOperationOptions = new CanvasGetComponentChildrenOperationOptions()
}
