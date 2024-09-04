import { Description } from '@tsed/schema'

import { OpsBuilderTargets } from './operationsBuilderTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

@Description('The possible targets for Operations Builder component styling.')
export class OpsBuilderStylingTargets implements TargetsModel<OpsBuilderTargets> {
  @Description('Adds styles to Operations Builder root ComponentWrapper.')
  @Css()
  [OpsBuilderTargets.root]: CssClassOrProps;

  @Description('Adds styles to Operations Builder container.')
  @Css()
  [OpsBuilderTargets.editor]: CssClassOrProps;

  @Description(`Adds styles to Operations Builder's actions container.`)
  @Css()
  [OpsBuilderTargets.actions]: CssClassOrProps;

  @Description('Adds styles to Close button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.close]: CssClassOrProps;

  @Description('Adds styles to events column in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signals]: CssClassOrProps;

  @Description('Adds styles to event selector label in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalSelectorLabel]: CssClassOrProps;

  @Description('Adds styles to event selector in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalSelector]: CssClassOrProps;

  @Description('Adds styles to events dropdown in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalOptions]: CssClassOrProps;

  @Description('Adds styles to events dropdown option in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalOption]: CssClassOrProps;

  @Description('Adds styles to events dropdown option label in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalOptionLabel]: CssClassOrProps;

  @Description('Adds styles to events dropdown option description in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalOptionDescription]: CssClassOrProps;

  @Description('Adds styles to Add Event button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.addSignal]: CssClassOrProps;

  @Description('Adds styles to Delete Event button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.deleteSignal]: CssClassOrProps;

  @Description('Adds styles to events list in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalsList]: CssClassOrProps;

  @Description('Adds styles to event item in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalItem]: CssClassOrProps;

  @Description('Adds styles to the selected event item in Operations Builder.')
  @Css()
  [OpsBuilderTargets.selectedSignalItem]: CssClassOrProps;

  @Description('Adds styles to event item content in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalItemContent]: CssClassOrProps;

  @Description('Adds styles to event item label in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalItemLabel]: CssClassOrProps;

  @Description('Adds styles to event item actions in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalItemActions]: CssClassOrProps;

  @Description('Adds styles to operations column in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operations]: CssClassOrProps;

  @Description('Adds styles to operation selector in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationSelector]: CssClassOrProps;

  @Description('Adds styles to Add operation button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.addOperation]: CssClassOrProps;

  @Description('Adds styles to operations dropdown in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationOptions]: CssClassOrProps;

  @Description('Adds styles to operations dropdown option in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationOption]: CssClassOrProps;

  @Description('Adds styles to operations dropdown option label in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationOptionLabel]: CssClassOrProps;

  @Description('Adds styles to operations dropdown option description in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationOptionDescription]: CssClassOrProps;

  @Description('Adds styles to operation form container in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationDetails]: CssClassOrProps;

  @Description('Adds styles to operation form in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationForm]: CssClassOrProps;

  @Description(`Adds styles to Operations Builder's operation actions container.`)
  @Css()
  [OpsBuilderTargets.operationActions]: CssClassOrProps;

  @Description('Adds styles to unsupported operations warning message.')
  @Css()
  [OpsBuilderTargets.operationTypeWarning]: CssClassOrProps;

  @Description('Adds styles to operations selector label.')
  @Css()
  [OpsBuilderTargets.operationSelectorLabel]: CssClassOrProps;

  @Description('Adds styles to Save operation button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.saveOperation]: CssClassOrProps;

  @Description('Adds styles to Cancel operation button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.cancelOperation]: CssClassOrProps;

  @Description('Adds styles to operations list in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationList]: CssClassOrProps;

  @Description('Adds styles to operations item in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationItem]: CssClassOrProps;

  @Description('Adds styles to operation name in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationType]: CssClassOrProps;

  @Description('Adds styles to Edit operation button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.editOperation]: CssClassOrProps;

  @Description('Adds styles to Delete operation button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.deleteOperation]: CssClassOrProps;

  @Description('Adds styles to Move Up button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.moveUpOperation]: CssClassOrProps;

  @Description('Adds styles to Move Down button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.moveDownOperation]: CssClassOrProps;

  @Description('Adds styles to event Type warning message in Operations Builder.')
  @Css()
  [OpsBuilderTargets.signalTypeWarning]: CssClassOrProps;

  @Description('Adds styles to astericks from unsupported event item label in Operations Builder.')
  @Css()
  [OpsBuilderTargets.unsupportedSignalAsterisks]: CssClassOrProps;

  @Description('Adds styles to welcome screen in Operations Builder.')
  @Css()
  [OpsBuilderTargets.welcomeScreen]: CssClassOrProps;

  @Description('Adds styles to image container in welcome screen in Operations Builder.')
  @Css()
  [OpsBuilderTargets.welcomeScreenImage]: CssClassOrProps;

  @Description('Adds styles to text in welcome screen in Operations Builder.')
  @Css()
  [OpsBuilderTargets.welcomeScreenText]: CssClassOrProps;

  @Description('Adds styles to subtext in welcome screen in Operations Builder.')
  @Css()
  [OpsBuilderTargets.welcomeScreenSubtext]: CssClassOrProps
}

@Description('An object containing styling for the component.')
export class OpsBuilderStyling extends StylingModel<OpsBuilderStylingTargets> {
  targets: OpsBuilderStylingTargets
}
