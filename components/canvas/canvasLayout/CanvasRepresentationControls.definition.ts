import { Default, Description, Optional, Property, Required } from '@tsed/schema'

import { ActionButtonVisibility } from './canvasActionButtonVisibility.definition'

export class CanvasRepresentationControls {
  @Required()
  @Default(false)
  collapsed: boolean

  @Property()
  actionButtonVisibility: ActionButtonVisibility = new ActionButtonVisibility()

  @Optional()
  @Description('Icon class associated with canvas representation item that is being dragged. ')
  draggedRepresentationIconClass?: string

  @Required()
  @Default('')
  iconClass?: string

  @Optional()
  headerBadge?: {
    text?: string
    badgeClass?: string
    iconClass?: string
  }

  @Optional()
  @Description('Whether the canvas representation item is selected on the canvas.')
  selected?: boolean
}
