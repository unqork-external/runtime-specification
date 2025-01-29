import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { DeletePersistedDataOperationOptions } from './deletePersistedData.options'
import { Stable, OpsBuilderStable } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.DELETE_PERSISTED_DATA)
@Description('The Delete Persisted Data operation deletes the record in Browser Storage.')
@Stable()
@OpsBuilderStable()
export class DeletePersistedDataOperation extends Operation<OperationTypes.DELETE_PERSISTED_DATA> {
  @Required()
  public type = OperationTypes.DELETE_PERSISTED_DATA as const

  @Required()
  public options: DeletePersistedDataOperationOptions = new DeletePersistedDataOperationOptions()
}
