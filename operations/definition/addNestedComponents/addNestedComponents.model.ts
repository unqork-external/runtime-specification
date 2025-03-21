import { DiscriminatorValue, Required } from '@tsed/schema'

import { AddNestedComponentsOperationOptions } from './addNestedComponents.options'
import { TrimmedDescription, Alpha } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.ADD_NESTED_COMPONENTS)
@TrimmedDescription(`
  Given a target, add a set of component templates to that location as children.

  Primarily created for UDesigner to create child components.

  Not encouraged for use due to direct exposure of the specification.
`)
@Alpha()
export class AddNestedComponentsOperation extends Operation<OperationTypes.ADD_NESTED_COMPONENTS> {
  public type = OperationTypes.ADD_NESTED_COMPONENTS as const
  @Required()
  public options = new AddNestedComponentsOperationOptions()
}
