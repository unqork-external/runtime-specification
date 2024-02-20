import { DiscriminatorValue, Required } from '@tsed/schema'

import { RemoveNestedComponentsOperationOptions } from './removeNestedComponents.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.REMOVE_NESTED_COMPONENTS)
export class RemoveNestedComponentsOperation extends Operation<OperationTypes.REMOVE_NESTED_COMPONENTS> {
  public type = OperationTypes.REMOVE_NESTED_COMPONENTS as const

  @Required()
  public options: RemoveNestedComponentsOperationOptions = new RemoveNestedComponentsOperationOptions()
}
