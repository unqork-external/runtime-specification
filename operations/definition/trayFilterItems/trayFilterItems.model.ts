import { DiscriminatorValue, Required } from '@tsed/schema'

import { TrayFilterItemsOperationOptions } from './trayFilterItems.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TRAY_FILTER_ITEMS)
export class TrayFilterItemsOperation extends Operation<OperationTypes.TRAY_FILTER_ITEMS> {
  @Required()
  public type = OperationTypes.TRAY_FILTER_ITEMS as const

  @Required()
  public options: TrayFilterItemsOperationOptions = new TrayFilterItemsOperationOptions()
}
