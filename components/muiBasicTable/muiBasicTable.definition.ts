import {
  CollectionOf,
  Default,
  Description,
  DiscriminatorValue,
  Enum,
  Optional,
  Property,
  Required,
} from '@tsed/schema'

import { MuiColumnDefinition } from './columns'
import { ColumnState } from './columns/columnState'
import { ColumnPinningState } from './columns/pinning/columnPinningState'
import { type ColumnVisibilityState } from './columns/visibility/columnVisibilityState'
import { MuiBasicTableField } from './field/muiBasicTable.field'
import { ExtendedColumnFilter } from './filters/columnFilter'
import { PaginationState } from './pagination/paginationState'
import { PinPosition } from './rows/pinning/pinPosition'
import { RowPinningState } from './rows/pinning/rowPinningState'
import { RowState } from './rows/rowState'
import { RowSelection } from './selection/rowSelection'
import type { SortingState } from './sorting/sortingState'
import { TableStyling } from './styling/table.styling'
import { TableTargetsEnum } from './targets/tableTargets.enum'
import { ToolbarState } from './toolbar/toolbarState'
import { TableViewTypeEnum } from './views/viewType'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface'
import { Display } from '../../component-composition'
import type { SignalTargets } from '../../signals'
import { BasicGridNestables } from '../basicGrid'

@DiscriminatorValue('muiBasicTable')
@ViewTargets(TableTargetsEnum)
export class MuiBasicTableComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'muiBasicTable' = 'muiBasicTable' as const

  @Property()
  customClass: string

  @Property()
  display: Display = new Display()

  @Property()
  field?: MuiBasicTableField

  @Property()
  label?: string

  @Optional()
  isTableFullScreen?: boolean

  @Property()
  declare styling: TableStyling

  @Property()
  isExpanded?: boolean

  @Property()
  columnState: ColumnState = new ColumnState()

  @Property()
  rowState: RowState = new RowState()

  @Property()
  @Default(TableViewTypeEnum.SPREADSHEET)
  @Enum(TableViewTypeEnum)
  viewType: TableViewTypeEnum | string = 'spreadsheet'

  @Property()
  enableRowSelection: boolean

  @Property()
  @Default(false)
  enableRowPinning: boolean = false

  @Property()
  enableColumnResizing: boolean

  @Property()
  enableGrouping: boolean = true

  @Property()
  enableColumnOrdering: boolean

  @Default(true)
  @Description('enable the MRT to scan the data and automatically generate filter options')
  enableFacetedValues: boolean = true

  @Property()
  enableColumnPinning: boolean

  @Property()
  enablePagination: boolean

  @Description(
    'Allows global filters to be applied to the Table component, and displays the global filter search icon in the Toolbar.',
  )
  enableGlobalFilter: boolean = true

  @Description(
    'Allows column filters to be applied to the Table component, and displays the column filter icon in the Toolbar.',
  )
  enableColumnFilters: boolean = true

  @Property()
  enableTopToolbar: boolean = false

  @Property()
  enableColumnActions: boolean = false

  @Property()
  enableBottomToolbar: boolean = false

  @Property()
  enableRowNumbers?: boolean = false

  @Property()
  @Description(`
    In the default rowNumberDisplayMode (static), row numbers are just a static part of the table in their own column.
    They act like the row numbers in an excel spreadsheet.
    Sorting and filtering will not affect the row numbers.
  `)
  rowNumberDisplayMode: 'original' | 'static' = 'static'

  @Property()
  initialData: object[]

  @Property()
  @Enum(PinPosition)
  rowPinningDisplayMode: PinPosition | string = PinPosition.TopAndBottom

  @TrimmedDescription(`
    When \`false\`, pinned rows will not be visible if they are filtered or paginated out of the table.
    When \`true\`, pinned rows will always be visible regardless of filtering or pagination.
  `)
  @Optional()
  keepPinnedRows: boolean = false

  @Property()
  rowPinning: RowPinningState

  @Property()
  columnPinning: ColumnPinningState

  @Property()
  columnVisibility: ColumnVisibilityState

  @Property()
  selectedRows: RowSelection

  @Optional()
  @Default([])
  sortState: SortingState[] = []

  @Property()
  groupBy: string[]

  /**
   * Column Attributes
   * Unused until after we prioritize column transforms.
   */
  @Property()
  columnHeaders: string[]

  @Optional()
  @Description('A record mapping column keys to column definitions')
  columnComponents?: Record<string, MuiColumnDefinition>

  /**
   * Row Attributes
   */

  @CollectionOf(BaseComponentDefinition)
  rowComponents: BaseComponentDefinition[]

  /**
   * Nestables
   */
  @Property()
  nestables = new BasicGridNestables()

  /**
   * Helper Properties
   */
  @Property()
  declare value: object[]

  @Property()
  columns: string[] = []

  @Property()
  rows: string[] = []

  @Property()
  addRowOnInit: boolean

  @Property()
  @TrimmedDescription(`
    When columns are grouped, grouped columns are shifted to the left. This setting hides grouped columns implicitly.
    Note: When columns are hidden, they are not invisible - that is - their children still render, can be sorted, can be interacted with.
    If a column in invisible, their children do not render.
  `)
  hideGroupedColumns: boolean

  /**
   * Pagination Attributes
   */
  @Property()
  pagination: PaginationState = new PaginationState()

  @Property()
  @CollectionOf(ExtendedColumnFilter)
  columnFilters: ExtendedColumnFilter[]

  @Property()
  globalFilter?: string

  @Property()
  @TrimmedDescription(`
    This only has effect in edit mode. When enabled,
    users have the ability to press enter and put the focus
    on the cell that is below the current selection. When disabled,
    it exits the edit mode.
  `)
  navigateDownOnPressEnter: boolean

  @Description('state data for the toolbar')
  toolbarState = new ToolbarState()

  @Optional()
  declare signals?: SignalTargets<TableTargetsEnum>
}
