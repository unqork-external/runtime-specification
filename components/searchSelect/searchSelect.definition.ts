import { CollectionOf, Description, DiscriminatorValue, Property, Required } from '@tsed/schema'

import { OptionNestable } from './optionNestable'
import { SearchSelectField } from './searchSelectField'
import { SearchSelectSimpleViewModel } from './searchSelectSimpleViewModel'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { SearchSelectOptionComponentDefinition } from '../searchSelectOption'

@DiscriminatorValue('searchSelect')
export class SearchSelectComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'searchSelect' = 'searchSelect' as const

  @Property()
  useSimpleView?: boolean = false

  @Property()
  simpleView?: SearchSelectSimpleViewModel = new SearchSelectSimpleViewModel()

  @Property(Display)
  display: Display = new Display()

  @Property(SearchSelectField)
  @Description('Field settings of the simpleSelect component.')
  field: SearchSelectField = new SearchSelectField()

  @CollectionOf(SearchSelectOptionComponentDefinition)
  @Description('Nested option component definition.')
  options: SearchSelectOptionComponentDefinition[] = []

  @Description('Fully qualified child keys for options nestables. Maintained by nestable api.')
  optionKeys?: string[] = []

  @Description('Nestable definitions for simpleSelect component')
  nestables = {
    optionKeys: new OptionNestable(),
  }

  @Description('Value of the simpleSelect')
  declare value?: string[] | null
}
