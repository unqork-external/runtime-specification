import { DiscriminatorValue, Required } from '@tsed/schema'

import { CanvasHydrateOperationOptions } from './canvasHydrate.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CANVAS_HYDRATE)
export class CanvasHydrateOperation extends Operation<OperationTypes.CANVAS_HYDRATE> {
  @Required()
  public options: CanvasHydrateOperationOptions = new CanvasHydrateOperationOptions()
}
