import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators'
import { type CssClassOrProps } from '../../../styling'
import { TargetsModel } from '../../../viewTargets/targets.model'
import { OpsBuilderTargets } from '../targets/operationsBuilderTargets.enum'

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

  @Description('Adds styles to operation summary helper text in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationSummaryHelperText]: CssClassOrProps;

  @Description('Adds styles to operation summary label in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationSummaryLabel]: CssClassOrProps;

  @Description('Adds styles to operation summary in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationSummary]: CssClassOrProps;

  @Description('Adds styles to operation item subtext in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationItemSubtext]: CssClassOrProps;

  @Description('Adds styles to Add or Edit Operation heading in Operations Builder.')
  @Css()
  [OpsBuilderTargets.addEditOperationHeading]: CssClassOrProps;

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

  @Description('Adds styles to operations list header in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationListHeader]: CssClassOrProps;

  @Description('Adds styles to operations list header text in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationListHeaderText]: CssClassOrProps;

  @Description('Adds styles to operations list header actions in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationListHeaderActions]: CssClassOrProps;

  @Description('Adds styles to operations item in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationItem]: CssClassOrProps;

  @Description('Adds styles to operation menu in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationMenu]: CssClassOrProps;

  @Description('Adds styles to operation menu button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationMenuButton]: CssClassOrProps;

  @Description('Adds styles to operation menu wrapper in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationMenuWrapper]: CssClassOrProps;

  @Description('Adds styles to operation name in Ops Builder.')
  @Css()
  [OpsBuilderTargets.operationType]: CssClassOrProps;

  @Description('Adds styles to Edit operation button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.editOperation]: CssClassOrProps;

  @Description('Adds styles to Edit operation button label in Ops Builder.')
  @Css()
  [OpsBuilderTargets.editOperationLabel]: CssClassOrProps;

  @Description('Adds styles to Edit operation button icon in Ops Builder.')
  @Css()
  [OpsBuilderTargets.editOperationIcon]: CssClassOrProps;

  @Description('Adds styles to Delete operation button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.deleteOperation]: CssClassOrProps;

  @Description('Adds styles to Delete operation button label in Ops Builder.')
  @Css()
  [OpsBuilderTargets.deleteOperationLabel]: CssClassOrProps;

  @Description('Adds styles to Delete operation button icon in Ops Builder.')
  @Css()
  [OpsBuilderTargets.deleteOperationIcon]: CssClassOrProps;

  @Description('Adds styles to Move Up button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.moveUpOperation]: CssClassOrProps;

  @Description('Adds styles to Move Up button label in Ops Builder.')
  @Css()
  [OpsBuilderTargets.moveUpOperationLabel]: CssClassOrProps;

  @Description('Adds styles to Move Up button icon in Ops Builder.')
  @Css()
  [OpsBuilderTargets.moveUpOperationIcon]: CssClassOrProps;

  @Description('Adds styles to Move Down button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.moveDownOperation]: CssClassOrProps;

  @Description('Adds styles to Move Down button label in Ops Builder.')
  @Css()
  [OpsBuilderTargets.moveDownOperationLabel]: CssClassOrProps;

  @Description('Adds styles to Move Down button icon in Ops Builder.')
  @Css()
  [OpsBuilderTargets.moveDownOperationIcon]: CssClassOrProps;

  @Description('Adds styles to Copy to clipboard button in Ops Builder.')
  @Css()
  [OpsBuilderTargets.copyOperation]: CssClassOrProps;

  @Description('Adds styles to Copy to clipboard button label in Ops Builder.')
  @Css()
  [OpsBuilderTargets.copyOperationLabel]: CssClassOrProps;

  @Description('Adds styles to Copy to clipboard button icon in Ops Builder.')
  @Css()
  [OpsBuilderTargets.copyOperationIcon]: CssClassOrProps;

  @Description('Adds styles to Paste Operation button in Operations Builder.')
  @Css()
  [OpsBuilderTargets.pasteOperation]: CssClassOrProps;

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
  [OpsBuilderTargets.welcomeScreenSubtext]: CssClassOrProps;

  @Description('Adds styles to container for the Event Scopes selector in Operations Builder')
  @Css()
  [OpsBuilderTargets.eventScopeSelector]: CssClassOrProps;

  @Description('Adds styles to the label for the Event Scopes selector in Operations Builder')
  @Css()
  [OpsBuilderTargets.eventScopeSelectorLabel]: CssClassOrProps;

  @Description('Adds styles to the select component for the Event Scopes selector in Operations Builder')
  @Css()
  [OpsBuilderTargets.eventScopeSelectorOptions]: CssClassOrProps;

  @Description('Adds styles to operation name wrapper in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationNameWrapper]: CssClassOrProps;

  @Description('Adds styles to operation name label in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationNameLabel]: CssClassOrProps;

  @Description('Adds styles to operation name helper text in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationNameHelperText]: CssClassOrProps;

  @Description('Adds styles to operation name in Operations Builder.')
  @Css()
  [OpsBuilderTargets.operationName]: CssClassOrProps
}
