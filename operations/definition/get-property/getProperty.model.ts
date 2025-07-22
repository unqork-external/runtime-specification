import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { GetPropertyOptions } from './getProperty.options'
import { Beta, DisplayName } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Get Property')
@DiscriminatorValue(OperationTypes.GET_PROPERTY)
@Description(`
  Gets a value at a property location for a target component.

  This Operation is only supported for use in Extension modules (modules tagged with "extension").
`)
@Beta()
export class GetPropertyOperation extends Operation<OperationTypes.GET_PROPERTY> {
  public type = OperationTypes.GET_PROPERTY as const

  @Required()
  public options: GetPropertyOptions = new GetPropertyOptions()
}
