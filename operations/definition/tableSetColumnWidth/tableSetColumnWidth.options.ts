import { Description, Example, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators'
import { MuiColumnSizingDefinition } from '../../../components'

export class TableSetColumnWidthOperationOptions {
  @Required()
  @Description('Key of the Table component to target for column visibility')
  targetKey: string

  @Required()
  @TrimmedDescription(`
    A record mapping column keys to column sizing definitions.
    A column size definition provides 'size', 'minSize', and 'maxSize' to control
    the column width (all values in pixels) and an optional flag 'grow' which, when set to true,
    makes the column to expand filling all the remaining space.
`)
  @Example(`
    columnSizing: {
      "firstName": {
        "size": 180
      },
      "dob": {
        "size": 80,
        "grow": true
      },
      "status": {
        "minSize": 40,
        "maxSize": 120
      },
    }
  `)
  columnSizing: Record<string, MuiColumnSizingDefinition>
}
