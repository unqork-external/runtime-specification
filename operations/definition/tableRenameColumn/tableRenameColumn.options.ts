import { Description, Example, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TableRenameColumnOperationOptions extends TargetedOperationOptions {
  @Description('An object mapping column keys to their new labels')
  @Required()
  @Example(`
    keysToRename: {
      "firstName": "Name",
      "dob": "Date of Birth",
    }
  `)
  keysToRename: Record<string, string>
}
