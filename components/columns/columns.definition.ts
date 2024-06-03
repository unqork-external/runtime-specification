import { CollectionOf, Const, Description, DiscriminatorValue, Property } from '@tsed/schema'

import { ColumnData } from './columnData'
import { ColumnsField } from './columns.field'
import { ColumnsStyling } from './styling/columns.styling'
import { ColumnsTargets } from './targets/columnsTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { StandardArrayNestable } from '../../nestables'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('columns')
@TrimmedDescription(`
    The Columns component is part of the core range of Centauri display and layout components.
    A creator can use the Columns component to customize the layout of their module by organizing the components into columns.
`)
export class ColumnsComponentDefinition extends BaseComponentDefinition {
  @Const('columns')
  type: 'columns' = 'columns' as const

  @CollectionOf(ColumnData)
  @TrimmedDescription(`
      The 'columns' property holds an array of objects that describe each column that should be rendered.
      Each column object holds references to the components nested inside of it and details related to it's layout.
    `)
  columns: ColumnData[]

  @CollectionOf(BaseComponentDefinition)
  @Description(
    `The 'components' property holds the initial configs of all the components that will be rendered in every column.`,
  )
  components?: BaseComponentDefinition[]

  @Property()
  field: ColumnsField = new ColumnsField()

  @Property()
  display: Display = new Display()

  @Description('Object that maps customized CSS styling to specific targets on the Columns component.')
  @Examples(targetedStylingExample)
  declare styling: ColumnsStyling

  @Description('Nestable information for columns')
  nestables = { childIds: new StandardArrayNestable() }

  @Description('Child ids for all nestable references within the component.')
  childIds: string[] = []

  @Property()
  declare signals?: SignalTargets<ColumnsTargets>
}
