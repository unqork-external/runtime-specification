import { CollectionOf, Description, Required } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators'

export class TableSetColumnOrderingOperationOptions {
  @Description('Key of the table component to set column ordering')
  @Required()
  targetKey: string

  @Required()
  @TrimmedDescription(`
    The columns in the desired order. 
    Existing columns not specified in this list will be placed after the entries of the list.
    This field can read the ordering array from a different component through interpolation
  `)
  @CollectionOf('string')
  columnsOrder: string | string[]
}
