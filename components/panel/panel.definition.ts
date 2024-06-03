import { CollectionOf, Const, Default, Description, DiscriminatorValue, Optional, Property } from '@tsed/schema'

import { PanelField } from './panel.field'
import { PanelStyling } from './styling/panel.styling'
import { PanelTargets } from './targets/panelTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import { type SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('panel')
@ViewTargets(PanelTargets)
@Description(
  trimAll(`
  The Panel component creates self-contained sections or pages in modules. Panels act as a storage unit that houses components. 
  You can also use Panels to help with navigation, create pop-up modals, or display components from other modules.
  `),
)
export class PanelComponentDefinition extends BaseComponentDefinition {
  @Const('panel')
  type: 'panel' = 'panel' as const

  @CollectionOf(BaseComponentDefinition)
  @Optional()
  @Default([])
  components: BaseComponentDefinition[] = []

  @Property()
  childIds: string[] = []

  @Optional()
  display: Display = new Display()

  @Optional()
  field: PanelField = new PanelField()

  @Description('Toggle on to display the panel as a modal')
  @Default(false)
  @Optional()
  modal: boolean = false

  @Description('Current open/closed state of the modal.')
  @Optional()
  @Default(false)
  modalIsOpen: boolean = false

  @Optional()
  nestables = new PanelNestable()

  @Optional()
  declare signals?: SignalTargets<PanelTargets>

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: PanelStyling
}

class PanelNestable {
  @Property()
  childIds: StandardArrayNestable = new StandardArrayNestable()
}
