import { CollectionOf, Const, Description, DiscriminatorValue, Example } from '@tsed/schema'

import { ColumnData } from './columnData'
import { ColumnsStyling } from './columns.styling'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { targetedStylingExample } from '../../examples/styling/targeted.styling.example'
import { StandardArrayNestable } from '../../nestables'

@DiscriminatorValue('columns')
@Description(
  trimAll(`
    The Columns component is part of the core range of Centauri display and layout components.
    A creator can use the Columns component to customize the layout of their module by organizing the components into columns.
  `),
)
export class ColumnsComponentDefinition extends BaseComponentDefinition {
  @Const('columns')
  @Description(`This is a 'Columns' component.`)
  type: 'columns' = 'columns' as const

  @CollectionOf(ColumnData)
  @Description(
    trimAll(`
      The 'columns' property holds an array of objects that describe each column that should be rendered.
      Each column object holds references to the components nested inside of it and details related to it's layout.
    `),
  )
  columns: ColumnData[]

  @CollectionOf(BaseComponentDefinition)
  @Description(
    `The 'components' property holds the initial configs of all the components that will be rendered in every column.`,
  )
  components?: BaseComponentDefinition[]

  @Description('Display settings to be cascaded to the children in the columns.')
  display: Display = new Display()

  @Description('Object that maps customized CSS styling to specific targets on the Columns component.')
  @Example(targetedStylingExample)
  declare styling: ColumnsStyling

  @Description('Nestable information for columns')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []
}
