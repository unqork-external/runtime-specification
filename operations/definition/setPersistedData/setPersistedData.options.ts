import { Description, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class SetPersistedDataOperationOptions extends OperationOptions {
  @Description('A namespace associated with the data to be saved.')
  @Required()
  namespace: string

  @Description('Key for the data to be stored at.')
  @Required()
  key: string

  @Description('Value to store at this key.')
  value?: unknown

  @Description('Milliseconds for this data to be valid for')
  ttl?: number
}
