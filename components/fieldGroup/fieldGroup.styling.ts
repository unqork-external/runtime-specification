import { Description, Property } from '@tsed/schema'

import { FieldGroupTargets } from './fieldGroup.targets'
import { Css } from '../../../decorators/schema/css.decorator'
import type { CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class FieldGroupStylingTargets implements TargetsModel<FieldGroupTargets> {
  @Description('Adds styles to the Field Group root component wrapper')
  @Css()
  [FieldGroupTargets.root]: CssClassOrProps
}

export class FieldGroupStyling extends StylingModel<FieldGroupStylingTargets> {
  @Property()
  targets: FieldGroupStylingTargets
}
