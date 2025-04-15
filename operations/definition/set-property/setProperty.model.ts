import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { SetPropertyOptions } from './setProperty.options'
import { DisplayName } from '../../../../decorators'
import { Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Property')
@DiscriminatorValue(OperationTypes.SET_PROPERTY)
@Description('Sets a value at a property location for a target component.')
@Stable()
export class SetPropertyOperation extends Operation<OperationTypes.SET_PROPERTY> {
  public type = OperationTypes.SET_PROPERTY as const

  @Required()
  public options: SetPropertyOptions = new SetPropertyOptions()
}
