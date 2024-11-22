import { Description, Optional } from '@tsed/schema'

export class ToolbarState {
  @Description('Displays the global filter input field.')
  @Optional()
  showGlobalFilter?: boolean

  @Description('boolean that tracks if the visibility menu button should render')
  @Optional()
  showColumnVisibilityMenu?: boolean

  @Description('the element that the column visibility menu should anchor to')
  @Optional()
  columnMenuAnchor?: object

  @Description('flag that determines if the column visibility menu button is rendered')
  @Optional()
  enableColumnVisibilityMenu?: boolean

  @Description('flag that determines if the show filters button is rendered')
  @Optional()
  enableShowFilters?: boolean

  @Description('flag that determines if the row density button is rendered')
  @Optional()
  enableRowDensity?: boolean
}
