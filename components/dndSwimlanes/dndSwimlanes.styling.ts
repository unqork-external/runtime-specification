import { Description } from '@tsed/schema'

import { DndSwimlanesTargets } from './dndSwimlanes.targets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { StylingModel } from '../../styling'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../viewTargets/targets.model'

export class DndSwimlanesStyling implements StylingModel<DndSwimlanesStylingTargets> {
  targets: DndSwimlanesStylingTargets
}

export class DndSwimlanesStylingTargets implements TargetsModel<DndSwimlanesTargets> {
  @Description('Adds styles to the root ComponentWrapper.')
  @Css()
  [DndSwimlanesTargets.root]: CssClassOrProps;

  @Description('Adds styles to the label.')
  @Css()
  [DndSwimlanesTargets.label]: CssClassOrProps;

  @Description('Adds styles to the lanes wrapper.')
  @Css()
  [DndSwimlanesTargets.lanes]: CssClassOrProps;

  @Description('Adds styles to each lane.')
  @Css()
  [DndSwimlanesTargets.lane]: CssClassOrProps;

  @Description('Adds styles to the lane wrapper.')
  @Css()
  [DndSwimlanesTargets.laneWrapper]: CssClassOrProps;

  @Description('Adds styles to the lane header.')
  @Css()
  [DndSwimlanesTargets.laneHeader]: CssClassOrProps;

  @Description('Adds styles to the lane label.')
  @Css()
  [DndSwimlanesTargets.laneLabel]: CssClassOrProps;

  @Description('Adds styles to the lane count.')
  @Css()
  [DndSwimlanesTargets.laneCount]: CssClassOrProps;

  @Description('Adds styles to each item.')
  @Css()
  [DndSwimlanesTargets.item]: CssClassOrProps;

  @Description('Adds styles to the drop targets.')
  @Css()
  [DndSwimlanesTargets.dropTarget]: CssClassOrProps;

  @Description('Adds styles to the placeholder.')
  @Css()
  [DndSwimlanesTargets.placeholder]: CssClassOrProps
}
