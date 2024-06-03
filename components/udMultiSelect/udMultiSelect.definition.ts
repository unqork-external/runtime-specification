import { Const, Description, DiscriminatorValue, Example, Property } from '@tsed/schema'

import { UdMultiSelectInputField } from './udMultiSelectInputField'
import { UdMultiSelectOptions } from './udMultiSelectOptions'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'

@DiscriminatorValue('udMultiSelect')
export class UdMultiSelectComponentDefinition extends BaseComponentDefinition {
  @Property(Display)
  @Description('Display settings of the multi select component.')
  display: Display = new Display()

  @Property(UdMultiSelectInputField)
  @Description('Field settings of the multi select component.')
  field: UdMultiSelectInputField = new UdMultiSelectInputField()

  @Description('List of options created from the data source which are used by react-select to render in express.')
  @Example('[{label: "a", value: "a"}, {label: "b", value: "b"}, {label: "c", value: "c"}]')
  options: UdMultiSelectOptions = new UdMultiSelectOptions()

  @Const('udMultiSelect')
  @Description('Type of the component.')
  type: 'udMultiSelect' = 'udMultiSelect' as const

  @Description('Value of the multi select. This will be used as the value in submission data.')
  @Example(['a', 'b', 'c'])
  declare value?: string | string[]
}
