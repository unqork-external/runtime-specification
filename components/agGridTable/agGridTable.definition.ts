import { Const, Default, DiscriminatorValue, Optional, Property } from '@tsed/schema'

import { gridOptionsExamples, valueExamples } from './agGridTable.examples'
import { AgGridTableStyling } from './agGridTable.styling'
import { AgGridTableTargets } from './agGridTableTargets.enum'
import { GRID_OPTION_DEFAULTS } from './defaults'
import { Examples, TrimmedDescription, ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'

@DiscriminatorValue('agGridTable')
@ViewTargets(AgGridTableTargets)
export class AgGridTableComponentDefinition extends BaseComponentDefinition {
  @Const('agGridTable')
  type: 'agGridTable' = 'agGridTable' as const

  @Optional()
  declare styling?: AgGridTableStyling

  @Optional()
  declare signals?: SignalTargets<AgGridTableTargets>

  @Property()
  customClass: string

  @Property()
  display: Display = new Display()

  @Property()
  @Default('500px')
  height: string

  @Optional()
  @TrimmedDescription(`
    'gridOptions' holds the options the the agGridTable is created with.
  `)
  @Default(JSON.stringify(GRID_OPTION_DEFAULTS, null, 2))
  @Examples(gridOptionsExamples)
  gridOptions?: any

  @Optional()
  @TrimmedDescription(`
    AgGridTable's 'value' holds the rowData for the agGridTable, structured as an array of objects.
    Each object represents a row in the table.
    Each property in the object is a "field" that AG Grid ColumnDefs and expressions can reference.
  `)
  @Examples(valueExamples)
  declare value?: object[] | undefined
}
