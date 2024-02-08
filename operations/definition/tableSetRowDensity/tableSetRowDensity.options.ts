import { Description, Required } from '@tsed/schema'

import { type RowDensity } from '../../../components/muiBasicTable/rows/density/rowDensity'

export class TableSetRowDensityOptions {
  @Required()
  @Description('Key of the target entity')
  targetKey: string

  @Required()
  @Description('The density of the rows')
  rowDensity: RowDensity
}
