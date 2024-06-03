import { Description, Required } from '@tsed/schema'

import { TrayGroupDefinition } from '../../../components'

export class TrayApplyGroupsOperationOptions {
  @Required()
  @Description('key of the tray to target')
  targetKey: string

  @Required()
  @Description('Collection of Tray Groups to display in the tray component')
  groups: TrayGroupDefinition[]
}
