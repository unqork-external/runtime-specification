import { DiscriminatorValue, Required } from '@tsed/schema'

import { IfOperationOptions } from './if.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.IF)
@Alpha()
@AutogenDisabled()
export class IfOperation extends Operation<OperationTypes.IF> {
  public type = OperationTypes.IF as const

  @Required()
  public options: IfOperationOptions = new IfOperationOptions()
}
