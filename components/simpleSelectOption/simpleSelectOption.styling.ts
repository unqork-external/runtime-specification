import { Description, Property } from '@tsed/schema'

import { SimpleSelectOptionTargets } from './simpleSelectOptionTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

export class SimpleSelectOptionStyleTargets implements TargetsModel<SimpleSelectOptionTargets> {
  @Description('Adds styles to Simple Select Option root element.')
  @Css()
  [SimpleSelectOptionTargets.root]: CssClassOrProps;

  @Description('Adds styles to Simple Select Option field.')
  @Css()
  [SimpleSelectOptionTargets.option]: CssClassOrProps;

  @Description('Adds styles to Simple Select Adornments.')
  @Css()
  [SimpleSelectOptionTargets.adornments]: CssClassOrProps;

  @Description('Adds styles to Simple Select left Adornments.')
  @Css()
  [SimpleSelectOptionTargets.adornmentsLeft]: CssClassOrProps;

  @Description('Adds styles to Simple Select right Adornments.')
  @Css()
  [SimpleSelectOptionTargets.adornmentsRight]: CssClassOrProps
}

export class SimpleSelectOptionStyling extends StylingModel<SimpleSelectOptionStyleTargets> {
  @Property()
  targets: SimpleSelectOptionStyleTargets
}
