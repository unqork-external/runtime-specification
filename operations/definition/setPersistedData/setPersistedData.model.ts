import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { SetPersistedDataOperationOptions } from './setPersistedData.options'
import { Beta, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Persisted Data')
@DiscriminatorValue(OperationTypes.SET_PERSISTED_DATA)
@Description('Sets or replaces a record in Browser Storage.')
@Beta()
@AutogenDisabled()
export class SetPersistedDataOperation extends Operation<OperationTypes.SET_PERSISTED_DATA> {
  @Required()
  public type = OperationTypes.SET_PERSISTED_DATA as const

  @Required()
  public options: SetPersistedDataOperationOptions = new SetPersistedDataOperationOptions()
}
