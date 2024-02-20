import { DiscriminatorValue, Required } from '@tsed/schema'

import { DynamicOperationOptions } from './dynamic.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.DYNAMIC)
export class DynamicOperation extends Operation<OperationTypes.DYNAMIC> {
  public type = OperationTypes.DYNAMIC as const

  @Required()
  public options: DynamicOperationOptions = new DynamicOperationOptions()
}
