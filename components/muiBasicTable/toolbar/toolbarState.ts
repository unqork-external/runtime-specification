import { Description, Optional } from '@tsed/schema'

export class ToolbarState {
  @Description('flag that determines if the global filter button is rendered')
  @Optional()
  enableGlobalFilter?: boolean
  @Description('boolean that tracks if the global filter should render')
  @Optional()
  showGlobalFilter?: boolean

  @Description('flag that determines if the column visibility menu button is rendered')
  @Optional()
  enableColumnVisibilityMenu?: boolean

  @Description('boolean that tracks if the visibility menu button should render')
  @Optional()
  showColumnVisibilityMenu?: boolean

  @Description('the element that the column visibility menu should anchor to')
  @Optional()
  columnMenuAnchor?: object

  @Description('flag that determines if the row density button is rendered')
  @Optional()
  enableRowDensity?: boolean
}
