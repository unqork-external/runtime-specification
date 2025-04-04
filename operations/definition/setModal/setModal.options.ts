import { Description, Example, Property, Required } from '@tsed/schema'

import { OperationOptions } from '../../interface'

export class SetModalOptions extends OperationOptions {
  @Description('The key or path to the container we intend to target for an operation')
  targetKey: string

  @Required()
  @Description('modalAction refers to the event that the modal should execute.')
  @Example(`MODAL_CLOSE_KEY`, `MODAL_OPEN_KEY`)
  modalAction: string

  @Property()
  targetEventKey: string
}
