import { Default, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { CANVAS_ITEM_ID, CanvasItem } from './canvasItem/canvasItem.definition'
import { LAYOUT_ID } from './canvasLayout/canvasChildLayout.definition'
import { CanvasRepresentation } from './canvasLayout/canvasRepresentation.definition'
import { CanvasStyling } from './styling/canvas.styling'
import { CanvasTargetsEnum } from './targets/canvasTargets.enum'
import { ViewTargets } from '../../../decorators'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'

export type CanvasModes = 'EDIT' | 'PREVIEW' | 'IDE'

export enum CanvasHighlightType {
  INDICATE = 'INDICATE',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export type CanvasHighlight = {
  type: CanvasHighlightType
  isHighlighted: boolean
}

@DiscriminatorValue('canvas')
@ViewTargets(CanvasTargetsEnum)
export class CanvasComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'canvas' = 'canvas' as const

  @Property()
  declare styling: CanvasStyling

  @Property()
  @Default(true)
  useDefaultStyles: boolean

  @Property()
  @Default(true)
  useConverter: boolean = true

  @Property()
  @Default(false)
  useVegaDesigner: boolean = false

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
  @Description('Map containing all component keys and their counts in the module definition')
  keyMap: Record<string, number> = {}

  @Required()
  @Default('Drag & Drop a module component or')
  emptyText: string = 'Drag & Drop a module component or'

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

  @Description('Nestable information for Canvas')
  nestables = { childIds: new StandardArrayNestable() }

  @Optional()
  @Description('This refers to the id of canvas representation item that is currently selected on the canvas.')
  currentSelectedCanvasItemId?: string

  @Required()
  highlights: Record<CANVAS_ITEM_ID, CanvasHighlight> = {}
}

export class CanvasComponentState extends CanvasComponentDefinition {
  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
