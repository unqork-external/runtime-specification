import { Default, Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { CANVAS_ITEM_ID, CanvasItem } from './canvasItem/canvasItem.definition'
import { LAYOUT_ID } from './canvasLayout/canvasChildLayout.definition'
import { CanvasRepresentation } from './canvasLayout/canvasRepresentation.definition'
import { BaseComponentDefinition } from '../../baseComponentInterface'
import { StandardArrayNestable } from '../../nestables'

export type CanvasModes = 'EDIT' | 'PREVIEW' | 'IDE'

@DiscriminatorValue('canvas')
export class CanvasComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'canvas' = 'canvas' as const

  @Required()
  @Default({})
  canvasItems: Record<CANVAS_ITEM_ID, CanvasItem> = {}

  @Required()
  currentLayoutId: string = 'root'

  @Required()
  @Default({})
  layouts: Record<LAYOUT_ID, CanvasRepresentation[]>

  @Required()
  @Default({})
  keyMap: Record<string, boolean> = {}

  @Required()
  @Default('Empty')
  emptyText: string

  @Required()
  @Default(false)
  @Description(
    'Boolean to determine if the canvas is disabled. ' +
      'This functionality differs from the Runtime concepts of `executable` and `interactive` ' +
      'in the sense that only some viewActions are disabled. ' +
      'Disabled viewActions include: paste, delete, deleteAll, edit, and handleDropEvent',
  )
  disabled: boolean

  @Required()
  mode: CanvasModes

  @Optional()
  width: number

  @Required()
  childIds: string[] = []

  @Description('Nestable information for Canvas')
  nestables = { childIds: new StandardArrayNestable() }
}
