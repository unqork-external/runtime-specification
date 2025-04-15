import { DiscriminatorValue, Required } from '@tsed/schema'

import { AddNestedComponentsOperationOptions } from './addNestedComponents.options'
import { TrimmedDescription, Alpha, DisplayName } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Add Nested Components')
@DiscriminatorValue(OperationTypes.ADD_NESTED_COMPONENTS)
@TrimmedDescription(`
  Add a set of component templates to a given Target location as children. 
  Primarily created for UDesigner to create child components. 
  Will not be for GA use due to direct exposure of the specification.
`)
@Alpha()
export class AddNestedComponentsOperation extends Operation<OperationTypes.ADD_NESTED_COMPONENTS> {
  public type = OperationTypes.ADD_NESTED_COMPONENTS as const
  @Required()
  public options = new AddNestedComponentsOperationOptions()
}
