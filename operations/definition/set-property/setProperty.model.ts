import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetPropertyOptions } from './setProperty.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_PROPERTY)
export class SetPropertyOperation extends Operation<OperationTypes.SET_PROPERTY> {
  @Required()
  public options: SetPropertyOptions = new SetPropertyOptions()
}
