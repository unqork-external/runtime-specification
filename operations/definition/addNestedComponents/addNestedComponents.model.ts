import { DiscriminatorValue, Required } from '@tsed/schema'

import { AddNestedComponentsOperationOptions } from './addNestedComponents.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.ADD_NESTED_COMPONENTS)
export class AddNestedComponentsOperation extends Operation<OperationTypes.ADD_NESTED_COMPONENTS> {
  @Required()
  public options: AddNestedComponentsOperationOptions = new AddNestedComponentsOperationOptions()
}
