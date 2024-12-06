import { Default, Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { CANVAS_ITEM_ID, CanvasItem } from './canvasItem/canvasItem.definition'
import { LAYOUT_ID } from './canvasLayout/canvasChildLayout.definition'
import { CanvasRepresentation } from './canvasLayout/canvasRepresentation.definition'
import { CanvasStyling } from './styling/canvas.styling'
import { BaseComponentDefinition } from '../../base-component-interface'
import { StandardArrayNestable } from '../../nestables'

export type CanvasModes = 'EDIT' | 'PREVIEW' | 'IDE'

@DiscriminatorValue('canvas')
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
}

export class CanvasComponentState extends CanvasComponentDefinition {
  @Required()
  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
