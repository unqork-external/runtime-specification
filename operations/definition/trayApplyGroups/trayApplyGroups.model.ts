import { DiscriminatorValue, Required } from '@tsed/schema'

import { TrayApplyGroupsOperationOptions } from './trayApplyGroups.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TRAY_APPLY_GROUPS)
export class TrayApplyGroupsOperation extends Operation<OperationTypes.TRAY_APPLY_GROUPS> {
  @Required()
  public type = OperationTypes.TRAY_APPLY_GROUPS as const

  @Required()
  public options: TrayApplyGroupsOperationOptions = new TrayApplyGroupsOperationOptions()
}
