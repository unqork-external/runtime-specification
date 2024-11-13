import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ChartRemoveSeriesOperationOptions } from './chartRemoveSeries.options'
import { OpsBuilderStable, Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@Stable()
@OpsBuilderStable()
@Description('Removes series from a Chart component.')
@DiscriminatorValue(OperationTypes.CHART_REMOVE_SERIES)
export class ChartRemoveSeriesOperation extends Operation<OperationTypes.CHART_REMOVE_SERIES> {
  @Required()
  public type = OperationTypes.CHART_REMOVE_SERIES as const

  @Required()
  public options: ChartRemoveSeriesOperationOptions = new ChartRemoveSeriesOperationOptions()
}
