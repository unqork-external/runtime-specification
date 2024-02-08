import { Property } from '@tsed/schema'

import { TableStyleTargets } from './tableStyle.targets'
import type { StylingModel } from '../../../styling/styling.model'

export class TableStyling implements StylingModel<TableStyleTargets> {
  @Property()
  targets: TableStyleTargets
}
