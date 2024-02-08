import { Default, Required } from '@tsed/schema'

export class CanvasRepresentationControls {
  @Required()
  @Default(false)
  collapsed: boolean

  @Required()
  @Default(false)
  highlighted: boolean
}
