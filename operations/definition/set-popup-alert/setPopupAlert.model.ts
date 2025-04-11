import { DiscriminatorValue, Required } from '@tsed/schema'

import { SetPopupAlertOptions } from './setPopupAlert.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Set Popup Alert')
@DiscriminatorValue(OperationTypes.SET_POPUP_ALERT)
@Alpha()
@AutogenDisabled()
export class SetPopupAlertOperation extends Operation<OperationTypes.SET_POPUP_ALERT> {
  public type = OperationTypes.SET_POPUP_ALERT as const

  @Required()
  public options: SetPopupAlertOptions = new SetPopupAlertOptions()
}
