import { any, CollectionOf, RecordOf, Default, Optional, Required, Property, Const, Description } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'

export class ViewgridDisplaySettings {
  @Required()
  @Default(false)
  showTitle = false

  @Required()
  @Default(false)
  sortByColumns = false

  @Required()
  @Default(false)
  multiselect = false

  @Required()
  @Default(false)
  multiselectWithCmdCtrl = false

  @Required()
  @Default(false)
  showCheckbox = false

  @Required()
  @Default('Submit')
  buttonText = 'Submit'
}

export class ViewgridInput {
  @Required()
  targetKey: string

  @Required()
  @Default(false)
  required = false
}

export class ViewgridOutput {
  @Required()
  targetKey: string

  @Required()
  mapping: string
}

export class ViewgridColumn {
  @Required()
  key: string

  @Required()
  heading: string

  @Optional()
  type?: string // consider making this an enum

  @Optional()
  css?: string

  @Required()
  @Default(false)
  button = false

  @Optional()
  formula?: string
}

// definitely have a formula string here
export class ViewgridColumnWithFormula extends ViewgridColumn {
  @Required()
  formula: string = ''
}

// After processing a VG column (including formula), add an array of values
export class ProcessedViewgridColumn extends ViewgridColumn {
  @CollectionOf(any)
  values?: unknown[]
}

export class ViewgridData {
  @CollectionOf(ViewgridInput)
  inputs: ViewgridInput[]

  @CollectionOf(ViewgridOutput)
  outputs: ViewgridOutput[]
}

export class ViewgridComponentDefinition extends BaseComponentDefinition {
  @Const('viewgrid')
  @Description('Type of the component.')
  type: 'viewgrid' = 'viewgrid' as const

  @Property(Display)
  display: Display = new Display()

  @Property(ViewgridDisplaySettings)
  displaySettings: ViewgridDisplaySettings

  @Property(ViewgridData)
  data: ViewgridData

  @Property(ViewgridColumn)
  columns: ViewgridColumn[]

  // State only
  // Values from inputs that has been processed and flattened for easy use
  // within columns
  @RecordOf(any)
  vgScope: Record<string, unknown> = {}
  // Based on input arrays

  @Required()
  @Default(0)
  rowCount = 0
}
