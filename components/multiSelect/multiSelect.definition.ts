import { Const, Description, DiscriminatorValue, Example, Property } from '@tsed/schema'

import { MultiSelectStyling } from './multiSelect.styling'
import { MultiSelectInputField } from './multiSelectInputField'
import { MultiSelectOptions } from './multiSelectOptions'
import { MultiSelectTargets } from './multiSelectTargets.enum'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('multiSelect')
@ViewTargets(MultiSelectTargets)
export class MultiSelectComponentDefinition extends BaseComponentDefinition {
  @Property(Display)
  display: Display = new Display()

  @Property(MultiSelectInputField)
  @Description('Field settings of the multi select component.')
  field: MultiSelectInputField = new MultiSelectInputField()

  @Description('List of options created from the data source which are used by react-select to render in express.')
  @Example('[{label: "a", value: "a"}, {label: "b", value: "b"}, {label: "c", value: "c"}]')
  options: MultiSelectOptions = new MultiSelectOptions()

  @Const('multiSelect')
  @Description('Type of the component.')
  type: 'multiSelect' = 'multiSelect' as const

  @Description('Value of the multi select. This will be used as the value in submission data.')
  @Example(['a', 'b', 'c'])
  declare value?: string[]

  @Property()
  declare styling?: MultiSelectStyling

  @Property()
  declare signals?: SignalTargets<MultiSelectTargets>
}
