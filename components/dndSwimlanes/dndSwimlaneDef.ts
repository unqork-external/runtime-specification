import { Default, Description } from '@tsed/schema'

// Ex: 'To Do'
export type DndSwimlaneName = string
export type DndDoubleUnderscore = '__'
export type DndComponentsKey = 'Components'
// Ex: '__todo'
export type DndCardViewTypeKey = `${DndDoubleUnderscore}${Lowercase<string>}`

export type DndItemActionAfterDrop = 'move' | 'copy' | 'disable'
export type DndCardCustomCssType = string
export type DndCardCustomCssClass = string

export type JSONValue = string | number | boolean | JSONObject | JSONArray
export interface JSONObject {
  [x: string]: JSONValue
}
export interface JSONArray extends Array<JSONValue> {}

export type DndSwimlanesDisplayCard = {
  id: string
  showCard: boolean
  disabled: boolean
  nestableKey: DndCardViewTypeKey
  [key: string]: unknown
}
export class DndCardData {
  [key: string]: unknown
}
export type DndSwimlanesCardData = Record<DndSwimlaneName, DndCardData[]>

export type DndCardRowData = string | number | boolean | null | object | Date | DndCard

export type DndCard = {
  [key: string]: DndCardRowData
}

export class DndSwimlaneDef {
  @Description('The id of the Swimlane.')
  id: DndCardViewTypeKey

  @Description('The name of the Swimlane displayed at the top.')
  name: string

  @Description('The Cards that exist in this Swimlane.')
  cards: DndCardData[]

  @Description('The order this Swimlane should appear in.')
  index: number

  @Default([])
  @Description('The Swimlane IDs that Cards can be dragged from and dropped here.')
  allowFrom: DndCardViewTypeKey[] = []
}
