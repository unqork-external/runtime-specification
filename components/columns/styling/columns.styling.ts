import { Description } from '@tsed/schema'

import { ColumnsStyleTargets } from './columns.targets'
import { StylingModel } from '../../../styling'

export class ColumnsStyling extends StylingModel<ColumnsStyleTargets> {
  @Description("Columns's subComponents that can accept additional styles.")
  targets: ColumnsStyleTargets
}
