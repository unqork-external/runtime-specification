import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ChartResetSeriesVisibilityOperationOptions } from './chartResetSeriesVisibility.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Stable()
@OpsBuilderStable()
@Description('Resets all series to visible on a Chart component.')
@DiscriminatorValue(OperationTypes.CHART_RESET_SERIES_VISIBILITY)
export class ChartResetSeriesVisibilityOperation extends Operation<OperationTypes.CHART_RESET_SERIES_VISIBILITY> {
  @Required()
  public type = OperationTypes.CHART_RESET_SERIES_VISIBILITY as const

  @Required()
  public options: ChartResetSeriesVisibilityOperationOptions = new ChartResetSeriesVisibilityOperationOptions()
}
