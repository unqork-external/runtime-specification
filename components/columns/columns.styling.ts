import { Property } from '@tsed/schema'

import { Css } from '../../../decorators/css.decorator'
import type { CssClassOrProps } from '../../styling/cssClassOrProps.type'

enum ColumnsTargetsEnum {
  root = 'root',
}

export class ColumnsStyleTargets {
  @Css()
  [ColumnsTargetsEnum.root]: CssClassOrProps
}

export class ColumnsStyling {
  @Property()
  targets: ColumnsStyleTargets
}
