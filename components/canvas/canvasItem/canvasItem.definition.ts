import { Description } from '@tsed/schema'

import type { CanvasRepresentationControls } from '../canvasLayout/CanvasRepresentationControls.definition'

export type CANVAS_ITEM_ID = string

export type CanvasItemSettings = Record<string, unknown> & {
  componentId: string
  key: string
  type: string
}

export enum CanvasItemStatusCode {
  DUPLICATE_ITEM_KEY = 'duplicateItemKey',
}

export type CanvasItemStatus = {
  type: 'error' | 'warn' | 'info' | 'success'
  code?: CanvasItemStatusCode
  message: string
}

/**
 * CanvasItem represents a component on the canvas
 *
 * It is referenced by representations and rendered based on
 * those layouts
 */
export class CanvasItem {
  representationControls: CanvasRepresentationControls
  settings: CanvasItemSettings
  // TBD on below once we have more details on how this works with UD
  comments: { count?: number }
  rtc: Record<string, any>
  connections: { inputs: string[]; outputs: string[] }
  @Description(`
    Optional status for this canvas item.

    Displayed as a message box above canvas representation.
  `)
  status?: CanvasItemStatus
}
