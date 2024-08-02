import { Description, Example, Required } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class TraySetDisabledByOperationOptions extends TargetedOperationOptions {
  @Required()
  @Description('Property to match targets to')
  @Example('key, type')
  property: string

  @Required()
  @Description('Collection of canvas tray targets to disable')
  targets: string[]

  @Required()
  @Description('Desired disabled state')
  disabledState: boolean
}
