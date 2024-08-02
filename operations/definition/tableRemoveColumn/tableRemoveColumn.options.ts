import { Description, Required } from '@tsed/schema'

import { OneOrMany } from '../../../../decorators/schema/oneOrMany.decorator'
import { TargetedOperationOptions } from '../../interface'

export class TableRemoveColumnOperationOptions extends TargetedOperationOptions {
  @Description('The column(s) to be removed from the target table ')
  @Required()
  @OneOrMany('string')
  keysToRemove: string | string[]
}
