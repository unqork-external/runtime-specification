import { Description, Example, Required } from '@tsed/schema'

export class TraySetDisabledByOperationOptions {
  @Required()
  @Description('key of the tray to target')
  targetKey: string

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
