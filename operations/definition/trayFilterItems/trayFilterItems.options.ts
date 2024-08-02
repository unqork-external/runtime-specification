import { Description, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TrayFilterItemsOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('Collection of Tray Groups to display in the tray component')
  filterText: string
}
