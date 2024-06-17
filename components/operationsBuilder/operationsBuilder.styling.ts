import { Description } from '@tsed/schema'

import { OpsBuilderTargets } from './operationsBuilderTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

@Description('The possible targets for Ops Builder component styling.')
export class OpsBuilderStylingTargets implements TargetsModel<OpsBuilderTargets> {
  @Description('Adds styles to Ops Builder root ComponentWrapper.')
  @Css()
  [OpsBuilderTargets.root]: CssClassOrProps;

  @Description('Adds styles to Ops Builder container.')
  @Css()
  [OpsBuilderTargets.editor]: CssClassOrProps;

  @Description(`Adds styles to Ops Builder's actions container.`)
  @Css()
  [OpsBuilderTargets.actions]: CssClassOrProps;

  @Description('Adds styles to close event button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.close]: CssClassOrProps;

  @Description('Adds styles to events column in Ops Builder.')
  @Css()
  [OpsBuilderTargets.events]: CssClassOrProps;

  @Description('Adds styles to event selector in Ops Builder.')
  @Css()
  [OpsBuilderTargets.eventSelector]: CssClassOrProps;

  @Description('Adds styles to events dropdown in Ops Builder.')
  @Css()
  [OpsBuilderTargets.eventOptions]: CssClassOrProps;

  @Description('Adds styles to events dropdown option in Ops Builder.')
  @Css()
  [OpsBuilderTargets.eventOption]: CssClassOrProps;

  @Description('Adds styles to Delete Event button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.deleteEvent]: CssClassOrProps;

  @Description('Adds styles to operations column in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operations]: CssClassOrProps;

  @Description('Adds styles to operation selector in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationSelector]: CssClassOrProps;

  @Description('Adds styles to operations dropdown in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationOptions]: CssClassOrProps;

  @Description('Adds styles to operations dropdown option in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationOption]: CssClassOrProps;

  @Description('Adds styles to operation form container in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationDetails]: CssClassOrProps;

  @Description('Adds styles to operation form in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationForm]: CssClassOrProps;

  @Description(`Adds styles to Ops Builder's operation actions container.`)
  @Css()
  [OpsBuilderTargets.operationActions]: CssClassOrProps;

  @Description('Adds styles to Save operation button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.saveOperation]: CssClassOrProps;

  @Description('Adds styles to Cancel operation button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.cancelOperation]: CssClassOrProps;

  @Description('Adds styles to operations list in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationList]: CssClassOrProps;

  @Description('Adds styles to operations item in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationItem]: CssClassOrProps;

  @Description('Adds styles to operation name in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationType]: CssClassOrProps;

  @Description('Adds styles to Edit operation button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.editOperation]: CssClassOrProps;

  @Description('Adds styles to Delete operation button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.deleteOperation]: CssClassOrProps;

  @Description('Adds styles to Move Up button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.moveUpOperation]: CssClassOrProps;

  @Description('Adds styles to Move Down button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.moveDownOperation]: CssClassOrProps
}

@Description('An object containing styling for the component.')
export class OpsBuilderStyling extends StylingModel<OpsBuilderStylingTargets> {
  targets: OpsBuilderStylingTargets
}
