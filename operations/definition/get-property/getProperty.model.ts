import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { GetPropertyOptions } from './getProperty.options'
import { DisplayName } from '../../../../decorators'
import { Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Get Property')
@DiscriminatorValue(OperationTypes.GET_PROPERTY)
@Description('Gets a value at a property location for a target component.')
@Stable()
export class GetPropertyOperation extends Operation<OperationTypes.GET_PROPERTY> {
  public type = OperationTypes.GET_PROPERTY as const

  @Required()
  public options: GetPropertyOptions = new GetPropertyOptions()
}
