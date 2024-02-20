import { DiscriminatorValue, Required } from '@tsed/schema'

import { AddNestedComponentsOperationOptions } from './addNestedComponents.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.ADD_NESTED_COMPONENTS)
export class AddNestedComponentsOperation extends Operation<OperationTypes.ADD_NESTED_COMPONENTS> {
  public type = OperationTypes.ADD_NESTED_COMPONENTS as const
  @Required()
  public options = new AddNestedComponentsOperationOptions()
}
