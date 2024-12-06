import { Description, Property } from '@tsed/schema'

import { DynamicGridDataCsmTargets } from './dynamicGridDataCsmTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class DynamicGridDataCsmStyleTargets implements TargetsModel<DynamicGridDataCsmTargets> {
  @Css()
  @Description('Adds styles to dynamicGridDataCSM root ComponentWrapper.')
  [DynamicGridDataCsmTargets.root]: CssClassOrProps
}

export class DynamicGridDataCsmStyling extends StylingModel<DynamicGridDataCsmStyleTargets> {
  @Property()
  declare targets: DynamicGridDataCsmStyleTargets
}
