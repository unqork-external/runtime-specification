import { DiscriminatorValue, Required } from '@tsed/schema'

import { DynamicOperationOptions } from './dynamic.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.DYNAMIC)
@Alpha()
@AutogenDisabled()
export class DynamicOperation extends Operation<OperationTypes.DYNAMIC> {
  public type = OperationTypes.DYNAMIC as const

  @Required()
  public options: DynamicOperationOptions = new DynamicOperationOptions()
}
