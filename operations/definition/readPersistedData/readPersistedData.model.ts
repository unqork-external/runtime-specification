import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ReadPersistedDataOperationOptions } from './readPersistedData.options'
import { Beta, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Read Persisted Data')
@DiscriminatorValue(OperationTypes.READ_PERSISTED_DATA)
@Description('The Read Persisted Data operation retrieves the record from Browser Storage.')
@Beta()
@AutogenDisabled()
export class ReadPersistedDataOperation extends Operation<OperationTypes.READ_PERSISTED_DATA> {
  @Required()
  public type = OperationTypes.READ_PERSISTED_DATA as const

  @Required()
  public options: ReadPersistedDataOperationOptions = new ReadPersistedDataOperationOptions()
}
