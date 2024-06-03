import { Default, Description, Enum, Optional } from '@tsed/schema'

import { GridDirection, GridWrap } from '../../base-types/layout'

@Description('Layout option settings')
export class LayoutOptions {
  @Optional()
  @Description('The number of columns.')
  columns?: number

  @Optional()
  @Description('The horizontal space between child components. This overrides the value of spacing.')
  columnSpacing?: number

  @Default('div')
  @Optional()
  @Description('The HTML element used for the root node.')
  element: keyof JSX.IntrinsicElements = 'div'

  @Default(GridDirection.ROW)
  @Optional()
  @Description('The direction in which child components are rendered.')
  @Enum(GridDirection)
  direction: GridDirection = GridDirection.ROW

  @Optional()
  @Description('The vertical space between child components. This overrides the value of spacing.')
  rowSpacing?: number

  @Default(0)
  @Optional()
  @Description('The space between child components')
  spacing: number = 0

  @Default(GridWrap.WRAP)
  @Optional()
  @Description('Defines whether child components are forced onto one line or can wrap into multiple lines.')
  @Enum(GridWrap)
  wrap: GridWrap = GridWrap.WRAP
}
