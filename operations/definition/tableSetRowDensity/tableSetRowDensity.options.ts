import { Description, Enum, Required } from '@tsed/schema'

import { RowDensity } from '../../../components/muiBasicTable/rows/density/rowDensity'

export class TableSetRowDensityOptions {
  @Required()
  @Description('The key of the Table component to set row density.')
  targetKey: string

  @Required()
  @Description(
    'The density of the rows in the Table component. Available options are spacious, comfortable or compact.',
  )
  @Enum(RowDensity)
  rowDensity: RowDensity
}
