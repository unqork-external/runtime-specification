import { Description, Example, Property, Required } from '@tsed/schema'

import { BaseOperationOptions } from '../../interface/operations.interface'

export class SetModalOptions extends BaseOperationOptions {
  @Required()
  @Description('modalAction refers to the event that the modal should execute.')
  @Example(`MODAL_CLOSE_KEY`, `MODAL_OPEN_KEY`)
  modalAction: string

  @Property()
  declare targetKey: string

  @Property()
  targetEventKey: string
}
