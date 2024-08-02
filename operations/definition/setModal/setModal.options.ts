import { Description, Example, Property, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class SetModalOptions extends TargetedOperationOptions {
  @Required()
  @Description('modalAction refers to the event that the modal should execute.')
  @Example(`MODAL_CLOSE_KEY`, `MODAL_OPEN_KEY`)
  modalAction: string

  @Property()
  targetEventKey: string
}
