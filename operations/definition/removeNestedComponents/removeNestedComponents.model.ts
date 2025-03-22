import { DiscriminatorValue, Required } from '@tsed/schema'

import { RemoveNestedComponentsOperationOptions } from './removeNestedComponents.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.REMOVE_NESTED_COMPONENTS)
@Alpha()
@AutogenDisabled()
export class RemoveNestedComponentsOperation extends Operation<OperationTypes.REMOVE_NESTED_COMPONENTS> {
  public type = OperationTypes.REMOVE_NESTED_COMPONENTS as const

  @Required()
  public options: RemoveNestedComponentsOperationOptions = new RemoveNestedComponentsOperationOptions()
}
