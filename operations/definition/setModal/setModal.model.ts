import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetModalOptions } from './setModal.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Modal')
@DiscriminatorValue(OperationTypes.SET_MODAL)
@Alpha()
@AutogenDisabled()
export class SetModalOperation extends Operation<OperationTypes.SET_MODAL> {
  public type = OperationTypes.SET_MODAL as const

  @Required()
  public options: SetModalOptions = new SetModalOptions()
}
