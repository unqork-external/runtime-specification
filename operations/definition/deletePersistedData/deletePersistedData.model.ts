import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { DeletePersistedDataOperationOptions } from './deletePersistedData.options'
import { Beta } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.DELETE_PERSISTED_DATA)
@Description('The Delete Persisted Data operation deletes the record in Browser Storage.')
@Beta()
@AutogenDisabled()
export class DeletePersistedDataOperation extends Operation<OperationTypes.DELETE_PERSISTED_DATA> {
  @Required()
  public type = OperationTypes.DELETE_PERSISTED_DATA as const

  @Required()
  public options: DeletePersistedDataOperationOptions = new DeletePersistedDataOperationOptions()
}
