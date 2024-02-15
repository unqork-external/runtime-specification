import { Description, Property } from '@tsed/schema'

import { trimAll } from '../../../../utilities'

export class TableSetNavigateDownOnPressEnterOperationOptions {
  @Description('The key for the table we want to set the navigation option')
  @Property()
  targetKey: string

  @Description(
    trimAll(`
        When enabled, pressing Enter on a cell in edit mode will set the focus to the cell immediately below.
        The new selected cell will also be in edit mode.
        If there's no cell below the current cell, nothing happens.
    `),
  )
  enabled: boolean
}
