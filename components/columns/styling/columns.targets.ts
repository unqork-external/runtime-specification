import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import type { CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { ColumnsTargets } from '../targets/columnsTargets.enum'

export class ColumnsStyleTargets {
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
