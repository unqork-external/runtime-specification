import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ChartToggleSeriesVisibilityOperationOptions } from './chartToggleSeriesVisibility.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Stable()
@OpsBuilderStable()
@Description('Updates series visibility on a Chart component.')
@DiscriminatorValue(OperationTypes.CHART_TOGGLE_SERIES_VISIBILITY)
export class ChartToggleSeriesVisibilityOperation extends Operation<OperationTypes.CHART_TOGGLE_SERIES_VISIBILITY> {
  @Required()
  public type = OperationTypes.CHART_TOGGLE_SERIES_VISIBILITY as const

  @Required()
  public options: ChartToggleSeriesVisibilityOperationOptions = new ChartToggleSeriesVisibilityOperationOptions()
}
