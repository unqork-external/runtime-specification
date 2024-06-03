import { Description, Property } from '@tsed/schema'

import { MultiSelectTargets } from './multiSelectTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

export class MultiSelectStylingTargets implements TargetsModel<MultiSelectTargets> {
  @Css()
  @Description('Add CSS classes or style objects to the Multiselect component wrapper')
  [MultiSelectTargets.root]: CssClassOrProps;

  @Css()
  @Description("Add CSS classes or style objects to the Multiselect's select control")
  [MultiSelectTargets.selectControl]: CssClassOrProps
}

export class MultiSelectStyling extends StylingModel<MultiSelectStylingTargets> {
  @Property()
  targets: MultiSelectStylingTargets
}
