import { Default, Required } from '@tsed/schema'

export enum CanvasHighlightType {
  INDICATE = 'INDICATE',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export class CanvasRepresentationControls {
  @Required()
  @Default(false)
  collapsed: boolean

  @Required()
  highlight: {
    type: CanvasHighlightType
    isHighlighted: boolean
  }

  @Required()
  @Default('')
  iconClass?: string
}
