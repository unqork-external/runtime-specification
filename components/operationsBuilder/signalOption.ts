import { Description, Optional } from '@tsed/schema'

import { MultiSelectOptionModel } from '../multiSelect'

export class SignalOption extends MultiSelectOptionModel {
  @Optional()
  @Description('Id of the Signal')
  id?: string
}
