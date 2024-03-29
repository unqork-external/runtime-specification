import type { CanvasRepresentationControls } from '../canvasLayout/CanvasRepresentationControls.definition'

export type CANVAS_ITEM_ID = string

export type CanvasItemSettings = Record<string, unknown> & {
  componentId: string
  key: string
  type: string
}

export class CanvasItem {
  representationControls: CanvasRepresentationControls
  settings: CanvasItemSettings
  // TBD on below once we have more details on how this works with UD
  comments: { count?: number }
  rtc: Record<string, any>
  connections: { inputs: string[]; outputs: string[] }
}
