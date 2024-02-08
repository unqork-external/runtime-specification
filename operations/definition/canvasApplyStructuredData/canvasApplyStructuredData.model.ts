import { DiscriminatorValue, Required } from '@tsed/schema'

import { CanvasApplyStructuredDataOperationOptions } from './canvasApplyStructuredData.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CANVAS_APPLY_STRUCTURED_DATA)
export class CanvasApplyStructuredDataOperation extends Operation<OperationTypes.CANVAS_APPLY_STRUCTURED_DATA> {
  @Required()
  public options: CanvasApplyStructuredDataOperationOptions = new CanvasApplyStructuredDataOperationOptions()
}
