import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import type { CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../../viewTargets/targets.model'
import { FieldGroupTargets } from '../targets/fieldGroupTargets.enum'

export class FieldGroupStylingTargets implements TargetsModel<FieldGroupTargets> {
  @Description('Adds styles to the Field Group root component wrapper')
  @Css()
  [FieldGroupTargets.root]: CssClassOrProps
}
