import { Description, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class ReadPersistedDataOperationOptions extends OperationOptions {
  @Description('A namespace associated with the data to be saved.')
  @Required()
  namespace: string

  @Description('Key for the data to be read from.')
  @Required()
  key: string

  @Description('Value to return if the stored value doesn’t exist or has expired')
  defaultValue?: unknown
}
