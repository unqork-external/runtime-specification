export type LAYOUT_ID = string

export class ChildCanvasLayout {
  layoutId: LAYOUT_ID
  nestable: string
  excludeFromCompiler?: boolean
  pathToChildren: string
}
