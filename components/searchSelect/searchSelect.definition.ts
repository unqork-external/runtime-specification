import { CollectionOf, Const, Default, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { OptionNestable } from './optionNestable'
import { SearchSelectField } from './searchSelectField'
import { SearchSelectSimpleViewModel } from './searchSelectSimpleView.model'
import { SelectedOptionsNestable } from './selectedOptionsNestable'
import { SearchSelectStyling } from './styling/searchSelect.styling'
import { SearchSelectTargets } from './targets/searchSelectTargets.enum'
import { ViewTargets } from '../../../decorators'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { targetedStylingExample } from '../../styling/targeted.styling.example'
import { Validation } from '../../validations'
import { SearchSelectOptionComponentDefinition } from '../searchSelectOption'

@DiscriminatorValue('searchSelect')
@TrimmedDescription(`
  The search select component is a primary fields component.
  It lets end-users search for, or select, one or more options from a drop-down list.
  End-users can enter a value into the field and the drop-down list filters options to match that value.
  End-users then use the arrow keys or their mouse to select an option from the filtered list.
  Options in the list can also include adornments on the left or right side of the text.
`)
@ViewTargets(SearchSelectTargets)
export class SearchSelectComponentDefinition extends BaseComponentDefinition {
  @Const('searchSelect')
  type: 'searchSelect' = 'searchSelect' as const

  @Default(false)
  @Description('Boolean used to determine if the underlying view is simple and un-styled')
  useSimpleView: boolean = false

  @Property()
  simpleView?: SearchSelectSimpleViewModel = new SearchSelectSimpleViewModel()

  @Property()
  display: Display = new Display()

  @Description('Field settings for the Search Select component.')
  field: SearchSelectField = new SearchSelectField()

  @CollectionOf(SearchSelectOptionComponentDefinition)
  @Description('Nested option component definition.')
  options: SearchSelectOptionComponentDefinition[] = []

  @Description('Fully qualified child keys for options nestables. Maintained by nestable api.')
  optionKeys: string[] = []

  @CollectionOf(BaseComponentDefinition)
  @Description('Nested selected option component definitions')
  selectedOptions?: BaseComponentDefinition[] = []

  @Description('Fully qualified child keys for selectedOptions nestables. Maintained by nestable api.')
  selected?: string[] = []

  @Description('Nestable definitions for Search Select component')
  nestables = {
    optionKeys: new OptionNestable(),
    selected: new SelectedOptionsNestable(),
  }

  @Description('Value of the Search Select.')
  declare value?: string[] | null

  @TrimmedDescription(`
    It holds information about the existing validations including validation types,
    rules, error messages, and results when they run
  `)
  validation: Validation = new Validation()

  @Examples(targetedStylingExample)
  declare styling: SearchSelectStyling
}
