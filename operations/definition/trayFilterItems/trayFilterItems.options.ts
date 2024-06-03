import { Description, Required } from '@tsed/schema'

export class TrayFilterItemsOperationOptions {
  @Required()
  @Description('key of the tray to target')
  targetKey: string

  @Required()
  @Description('Collection of Tray Groups to display in the tray component')
  filterText: string
}
