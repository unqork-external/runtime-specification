import { Description, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class DeletePersistedDataOperationOptions extends OperationOptions {
  @Description('A namespace associated with the data to be saved.')
  @Required()
  namespace: string

  @Description('Key for the data to be deleted.')
  @Required()
  key: string
}
