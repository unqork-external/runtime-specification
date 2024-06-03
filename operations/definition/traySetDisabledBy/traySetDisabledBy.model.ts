import { DiscriminatorValue, Required } from '@tsed/schema'

import { TraySetDisabledByOperationOptions } from './traySetDisabledBy.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TRAY_SET_DISABLED_BY)
export class TraySetDisabledByOperation extends Operation<OperationTypes.TRAY_SET_DISABLED_BY> {
  @Required()
  public type = OperationTypes.TRAY_SET_DISABLED_BY as const

  @Required()
  public options: TraySetDisabledByOperationOptions = new TraySetDisabledByOperationOptions()
}
