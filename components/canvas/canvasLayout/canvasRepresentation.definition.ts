import { Default, Optional, Required } from '@tsed/schema'

import type { ChildCanvasLayout, LAYOUT_ID } from './canvasChildLayout.definition'
import type { CANVAS_ITEM_ID } from '../canvasItem/canvasItem.definition'

export enum RepresentationTypes {
  VEGA = 'VEGA',
  LOGIC = 'LOGIC',
  LEGACY = 'LEGACY',
}

export class CanvasRepresentation {
  @Required()
  type: RepresentationTypes

  @Required()
  canvasItemId: CANVAS_ITEM_ID

  @Required()
  layoutId: LAYOUT_ID

  @Required()
  layoutIndex: number

  @Required()
  @Default(false)
  isNestable: boolean

  @Required()
  @Default(true)
  showHeader?: boolean = true

  @Optional()
  childLayouts?: Record<LAYOUT_ID, ChildCanvasLayout>

  @Optional()
  componentSpecifics?: Record<string, unknown>
}
