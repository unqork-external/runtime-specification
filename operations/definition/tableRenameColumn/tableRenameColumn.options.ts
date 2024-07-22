import { Description, Example, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class TableRenameColumnOperationOptions {
  @TrimmedDescription(`
    A unique string identifier used to specify the particular table
    or component in the application where the renaming operation is to be executed
  `)
  @Required()
  targetKey: string

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
