import { Description, Enum, Required } from '@tsed/schema'

import { RowDensity } from '../../../components/muiBasicTable/rows/density/rowDensity'
import { TargetedOperationOptions } from '../../interface'

export class TableSetRowDensityOptions extends TargetedOperationOptions {
  @Required()
  @Description(
    'The density of the rows in the Table component. Available options are spacious, comfortable or compact.',
  )
  @Enum(RowDensity)
  rowDensity: RowDensity
}
