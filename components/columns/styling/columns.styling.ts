import { Description, Property } from '@tsed/schema'

import { ColumnsStyleTargets } from './columns.targets'
import { Examples } from '../../../../decorators/schema/examples.decorator'
import { StylingModel } from '../../../styling'
import { targetedStylingExample } from '../../../styling/targeted.styling.example'

@Description('Object that maps customized CSS styling to specific targets on the Columns component.')
@Examples(targetedStylingExample)
export class ColumnsStyling implements StylingModel<ColumnsStyleTargets> {
  @Property()
  targets: ColumnsStyleTargets
}
