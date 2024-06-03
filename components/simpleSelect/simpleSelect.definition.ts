import { CollectionOf, Const, Default, Description, DiscriminatorValue, Optional, Property } from '@tsed/schema'

import { SimpleSelectField } from './simpleSelectField'
import { SimpleSelectInputAdornments } from './simpleSelectInputAdornments'
import { SimpleSelectNestables } from './simpleSelectNestables'
import { SimpleSelectSimpleViewModel } from './simpleSelectSimpleView.model'
import { SimpleSelectStyling } from './styling/simpleSelect.styling'
import { SimpleSelectTargets } from './targets/simpleSelectTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('simpleSelect')
@ViewTargets(SimpleSelectTargets)
@TrimmedDescription(`
  The Simple Select component is part of the core set of input components.
  It displays the field as a simple select control. 
  The end-user selects option value(s) from a list directly into the field.
  Use the Simple Select component in situations where lists contain many options (e.g. >6) 
  that don't need to be displayed upfront to the end user.
  
  By default the Simple Select component stays collapsed until the end-user clicks to open it. 
  After making a selection the Simple Select options close.
`)
export class SimpleSelectComponentDefinition extends BaseComponentDefinition {
  @Const('simpleSelect')
  type: 'simpleSelect' = 'simpleSelect' as const

  @Optional()
  @Default(false)
  @Description('Boolean used to determine if the underlying view is simple and unstyled')
  useSimpleView: boolean = false

  @Property()
  simpleView?: SimpleSelectSimpleViewModel

  @Optional()
  display: Display = new Display()

  @Optional()
  field: SimpleSelectField = new SimpleSelectField()

  @Optional()
  adornments: SimpleSelectInputAdornments = new SimpleSelectInputAdornments()

  @Property()
  left: string[] = []

  @Property()
  right: string[] = []

  @Optional()
  @CollectionOf(BaseComponentDefinition)
  @Description('Nested option component definition.')
  options: BaseComponentDefinition[] = []

  @Optional()
  @Description('Fully qualified child keys for options nestables. Maintained by nestable api.')
  optionKeys: string[] = []

  @Optional()
  @CollectionOf(BaseComponentDefinition)
  @Description('Nested selected option component definitions')
  selectedOptions: BaseComponentDefinition[] = []

  @Optional()
  @Description('Fully qualified child keys for selectedOptions nestables. Maintained by nestable api.')
  selected: string[] = []

  @Property()
  nestables = new SimpleSelectNestables()

  @Optional()
  declare signals?: SignalTargets<SimpleSelectTargets>

  @Optional()
  @Description('Value of the simpleSelect')
  declare value?: string[] | null

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: SimpleSelectStyling
}
