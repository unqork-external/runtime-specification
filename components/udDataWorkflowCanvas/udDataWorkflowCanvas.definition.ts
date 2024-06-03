import { Required, DiscriminatorValue, Description, Example, Optional, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'

export class DWFCanvasDropdownValues {
  @Required()
  @Description('Label for the dropdown option')
  label: string

  @Required()
  @Description('Value for the dropdown option')
  value: string
}

export class DWFCanvasDropdownOptions {
  @Optional()
  @Description('List of dropdown options')
  @Example('["Foo", "Bar", "Baz"]', '[{ label: "Foo", value: "Foo" }, { label: "Bar", value: "Bar" }]')
  values?: DWFCanvasDropdownValues[] | string[]

  @Optional()
  @Description('Component key to watch and pull option data from')
  targetKey?: string

  @Optional()
  @Description('Property of the targetKey component to pull option data from')
  property?: string
}

export class DWFCanvasOptions {
  @Description('List of options for the component dropdowns')
  componentList: DWFCanvasDropdownOptions = new DWFCanvasDropdownOptions()

  @Description('List of options for the output action dropdown')
  actionList: DWFCanvasDropdownOptions = new DWFCanvasDropdownOptions()
}

@DiscriminatorValue('uddataworkflowcanvas')
export class UdDataWorkflowCanvasComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'uddataworkflowcanvas' = 'uddataworkflowcanvas' as const

  @Property(Display)
  @Description('Display settings')
  display: Display = new Display()

  @Description('Options for the canvas. Includes dropdown items.')
  options: DWFCanvasOptions = new DWFCanvasOptions()
}
