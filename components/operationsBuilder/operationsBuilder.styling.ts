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

  @Description('Adds styles to Close button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.close]: CssClassOrProps;

  @Description('Adds styles to signals column in Ops Builder.')
  @Css()
  [OpsBuilderTargets.signals]: CssClassOrProps;

  @Description('Adds styles to signal selector in Ops Builder.')
  @Css()
  [OpsBuilderTargets.signalSelector]: CssClassOrProps;

  @Description('Adds styles to signals dropdown in Ops Builder.')
  @Css()
  [OpsBuilderTargets.signalOptions]: CssClassOrProps;

  @Description('Adds styles to signals dropdown option in Ops Builder.')
  @Css()
  [OpsBuilderTargets.signalOption]: CssClassOrProps;

  @Description('Adds styles to Add Signal button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.addSignal]: CssClassOrProps;

  @Description('Adds styles to Delete Signal button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.deleteSignal]: CssClassOrProps;

  @Description('Adds styles to signals list in Ops Builder.')
  @Css()
  [OpsBuilderTargets.signalsList]: CssClassOrProps;

  @Description('Adds styles to signal item in Ops Builder.')
  @Css()
  [OpsBuilderTargets.signalItem]: CssClassOrProps;

  @Description('Adds styles to the selected signal item in Ops Builder.')
  @Css()
  [OpsBuilderTargets.selectedSignalItem]: CssClassOrProps;

  @Description('Adds styles to signal item content in Ops Builder.')
  @Css()
  [OpsBuilderTargets.signalItemContent]: CssClassOrProps;

  @Description('Adds styles to signal item label in Ops Builder.')
  @Css()
  [OpsBuilderTargets.signalItemLabel]: CssClassOrProps;

  @Description('Adds styles to signal item actions in Ops Builder.')
  @Css()
  [OpsBuilderTargets.signalItemActions]: CssClassOrProps;

  @Description('Adds styles to operations column in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operations]: CssClassOrProps;

  @Description('Adds styles to operation selector in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationSelector]: CssClassOrProps;

  @Description('Adds styles to Add operation button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.addOperation]: CssClassOrProps;

  @Description('Adds styles to operations dropdown in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationOptions]: CssClassOrProps;

  @Description('Adds styles to operations dropdown option in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationOption]: CssClassOrProps;

  @Description('Adds styles to operations dropdown option label in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationOptionLabel]: CssClassOrProps;

  @Description('Adds styles to operations dropdown option description in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationOptionDescription]: CssClassOrProps;

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
