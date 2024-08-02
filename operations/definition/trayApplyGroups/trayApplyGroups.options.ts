import { Description, Required } from '@tsed/schema'

import { TrayGroupDefinition } from '../../../components'
import { TargetedOperationOptions } from '../../interface'

export class TrayApplyGroupsOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('Collection of Tray Groups to display in the tray component')
  groups: TrayGroupDefinition[]
}
