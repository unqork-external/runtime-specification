import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import type { CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../../viewTargets/targets.model'
import { ColumnsTargets } from '../targets/columnsTargets.enum'

@Description("Columns's subComponents that can accept additional styles.")
export class ColumnsStyleTargets implements TargetsModel<ColumnsTargets> {
  @Css()
  @Description("Adds styles to Columns's ComponentWrapper.")
  [ColumnsTargets.ROOT]: CssClassOrProps;

  @Css()
  @Description('Adds styles to Columns ComponentWrapper first child element.')
  [ColumnsTargets.INNER_WRAPPER]: CssClassOrProps;

  @Css()
  @Description('Adds styles to single column wrapper.')
  [ColumnsTargets.COLUMN]: CssClassOrProps
}
