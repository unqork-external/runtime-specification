import {
  CollectionOf,
  Const,
  Default,
  Description,
  DiscriminatorValue,
  Optional,
  Property,
  Required,
} from '@tsed/schema'

import { PanelField } from './panel.field'
import { PanelStyling } from './styling/panel.styling'
import { PanelTargets } from './targets/panelTargets.enum'
import { TrimmedDescription } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { AccessibilityCommon } from '../../component-composition'
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

  @Property()
  accessibility?: AccessibilityCommon = new AccessibilityCommon()

  @CollectionOf(BaseComponentDefinition)
  @Optional()
  @Default([])
  components: BaseComponentDefinition[] = []

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
  declare signals?: SignalTargets<PanelTargets>

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: PanelStyling

  @Optional()
  nestables = new PanelNestable()

  @Optional()
  @TrimmedDescription(
    'When using the `dynamic import` feature, this is the id of the application that an imported module should get its context from.',
  )
  resolveDynamicPanelApplicationId?: string

  @Optional()
  @TrimmedDescription(
    'When using the `dynamic import` feature, this is the version of the application that an imported module should get its context from.',
  )
  resolveDynamicPanelApplicationVersion?: string

  @Description('Controls if the Modal enforces holding focus.')
  @Optional()
  @Default(true)
  enforceFocus: boolean = true
}

export class PanelComponentState extends PanelComponentDefinition {
  @Property()
  childIds: string[] = []
}

class PanelNestable {
  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: StandardArrayNestable = new StandardArrayNestable()
}
