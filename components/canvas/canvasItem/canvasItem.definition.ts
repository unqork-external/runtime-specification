import { R1ComponentDefinition } from '../../../../runtime1/component/types'
import type { CanvasRepresentationControls } from '../canvasLayout/CanvasRepresentationControls.definition'

export type CANVAS_ITEM_ID = string

export type CanvasItemSettings = R1ComponentDefinition & { __canvasItemId: string }

export class CanvasItem {
  representationControls: CanvasRepresentationControls
  settings: CanvasItemSettings
  // TBD on below once we have more details on how this works with UD
  comments: Record<string, any>
  rtc: Record<string, any>
  connections: Record<string, any>
}
