import { CollectionOf, Default, Description, DiscriminatorValue, Enum, Property, Required } from '@tsed/schema'

import { ColumnState } from './columns/columnState'
import { ColumnPinningState } from './columns/pinning/columnPinningState'
import { type ColumnVisibilityState } from './columns/visibility/columnVisibilityState'
import { ColumnFilter } from './filters/columnFilter'
import { PaginationState } from './pagination/paginationState'
import { type RowDensity } from './rows/density/rowDensity'
import { PinPosition } from './rows/pinning/pinPosition'
import { RowPinningState } from './rows/pinning/rowPinningState'
import { RowSelection } from './selection/rowSelection'
import type { SortingState } from './sorting/sortingState'
import { TableStyling } from './styling/table.styling'
import { TableViewTypeEnum } from './views/viewType'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface'
import { Display, Field } from '../../componentComposition'
import { BasicGridNestables } from '../basicGrid'

@DiscriminatorValue('muiBasicTable')
export class MuiBasicTableComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'muiBasicTable' = 'muiBasicTable' as const

  @Property()
  customClass: string

  @Property()
  display: Display = new Display()

  @Property()
  field?: Field

  @Property()
  label?: string

  @Property()
  styling: TableStyling

  @Property()
  isExpanded?: boolean

  @Property()
  ignoreValueUpdate: string

  @Property()
  columnState: ColumnState = new ColumnState()

  @Property()
  @Default(TableViewTypeEnum.SPREADSHEET)
  @Enum(TableViewTypeEnum)
  viewType: TableViewTypeEnum | string = 'spreadsheet'

  @Property()
  enableRowSelection: boolean

  @Property()
  enableRowPinning: boolean

  @Property()
  enableColumnResizing: boolean

  @Property()
  enableGrouping: boolean = true

  @Property()
  enableColumnOrdering: boolean

  @Property()
  enableColumnPinning: boolean

  @Property()
  enablePagination: boolean

  @Property()
  enableGlobalFilter: boolean = true

  @Property()
  enableColumnFilters: boolean = true

  @Property()
  enableTopToolbar: boolean = false

  @Property()
  enableColumnActions: boolean = false

  @Property()
  enableBottomToolbar: boolean = false

  @Property()
  initialData: object[]

  @Property()
  @Enum(PinPosition)
  rowPinningDisplayMode: PinPosition | string

  @Property()
  rowPinning: RowPinningState

  @Property()
  columnPinning: ColumnPinningState

  @Property()
  columnVisibility: ColumnVisibilityState

  @Property()
  selectedRows: RowSelection

  @Property()
  sortState: SortingState[]

  @Property()
  groupBy: string[]

  /**
   * Column Attributes
   * Unused until after we prioritize column transforms.
   */
  @Property()
  columnHeaders: string[]

  @CollectionOf(BaseComponentDefinition)
  columnComponents: BaseComponentDefinition[]

  /**
   * Row Attributes
   */

  @CollectionOf(BaseComponentDefinition)
  rowComponents: BaseComponentDefinition[]

  @Property()
  rowDensity: RowDensity

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
  @Description(
    trimAll(`
    When columns are grouped, grouped columns are shifted to the left. This setting hides grouped columns implicitly.
    Note: When columns are hidden, they are not invisible - that is - their children still render, can be sorted, can be interacted with.
    If a column in invisible, their children do not render.
  `),
  )
  @Default(true)
  hideGroupedColumns: boolean = true

  /**
   * Pagination Attributes
   */
  @Property()
  pagination: PaginationState = new PaginationState()

  @Property()
  @CollectionOf(ColumnFilter)
  columnFilters: ColumnFilter[]

  @Property()
  globalFilter: string

  @Property()
  @Description(
    trimAll(`
    This only has effect in edit mode. When enabled, 
    users have the ability to press enter and put the focus 
    on the cell that is below the current selection. When disabled,
    it exits the edit mode.
  `),
  )
  navigateDownOnPressEnter: boolean
}
