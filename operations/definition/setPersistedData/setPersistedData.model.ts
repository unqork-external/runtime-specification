import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { SetPersistedDataOperationOptions } from './setPersistedData.options'
import { Beta } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SET_PERSISTED_DATA)
@Description('The Set Persisted Data operation sets or replaces record in Browser Storage.')
@Beta()
export class SetPersistedDataOperation extends Operation<OperationTypes.SET_PERSISTED_DATA> {
  @Required()
  public type = OperationTypes.SET_PERSISTED_DATA as const

  @Required()
  public options: SetPersistedDataOperationOptions = new SetPersistedDataOperationOptions()
}
