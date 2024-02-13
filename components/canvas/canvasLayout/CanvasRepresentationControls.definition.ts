import { Default, Required } from '@tsed/schema'

export type highlightType = 'INDICATE' | 'WARN' | 'ERROR'

export class CanvasRepresentationControls {
  @Required()
  @Default(false)
  collapsed: boolean

  @Required()
  highlight: {
    type: highlightType
    isHighlighted: boolean
  }
}
