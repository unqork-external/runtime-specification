import { Description, Required } from '@tsed/schema'

import { OneOrMany } from '../../../../decorators/schema/oneOrMany.decorator'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class TableRemoveColumnOperationOptions {
  @TrimmedDescription(`
    A unique string identifier used to specify the particular table
    or component in the application where the column removal operation is to be executed
  `)
  @Required()
  targetKey: string

  @Description('The column(s) to be removed from the target table ')
  @Required()
  @OneOrMany('string')
  keysToRemove: string | string[]
}
