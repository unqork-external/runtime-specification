import { Description, Property } from '@tsed/schema'

import { AgGridTableTargets } from './agGridTableTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class AgGridTableStyleTargets implements TargetsModel<AgGridTableTargets> {
  @Css()
  @Description('Adds styles to agGridTable root ComponentWrapper.')
  [AgGridTableTargets.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to agGridTable content wrapper')
  [AgGridTableTargets.content]: CssClassOrProps
}

export class AgGridTableStyling extends StylingModel<AgGridTableStyleTargets> {
  @Property()
  declare targets: AgGridTableStyleTargets
}
