import { Default, Optional, Property, Required } from '@tsed/schema'

import { ActionButtonVisibility } from './canvasActionButtonVisibility.definition'

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

  @Property()
  actionButtonVisibility: ActionButtonVisibility = new ActionButtonVisibility()

  @Required()
  @Default('')
  iconClass?: string

  @Optional()
  headerBadge?: {
    text?: string
    badgeClass?: string
    iconClass?: string
  }
}
