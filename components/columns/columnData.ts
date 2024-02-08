import { CollectionOf, Description, Example } from '@tsed/schema'

import { trimAll } from '../../../utilities'

export class ComponentReference {
  key: string
}

@Description(
  trimAll(`
    Each column data object holds information related to how an individual column should be rendered.
    This includes references to the nested components, and details on how the column should be laid out.
    The 'width', 'offset', 'push', and 'pull' properties are used to leverage bootstrap styling classes.
  `),
)
@Example({
  components: ['col1textfield', 'col1number', 'col1checkbox'],
  width: 6,
  offset: 0,
  push: 0,
  pull: 0,
})
export class ColumnData {
  @CollectionOf(ComponentReference)
  @Description('List of keys that reference the components that belong in the column.')
  components: ComponentReference[]

  @Description(`Moves this column and all subsequent columns to the right by a specified number of units.`)
  offset: number

  @Description(
    trimAll(`
      Moves the individual column to the right by a specified number of units without moving the other columns. 
      If you move one column into another column, the columns overlap.
    `),
  )
  push: number

  @Description(
    trimAll(`
      Moves the individual column to the left by a specified number of units without moving the other columns. 
      If you move one column into another column, the columns overlap.
    `),
  )
  pull: number

  @Description(
    `The width of the individual column in units. The wrapping 'Columns' component has a total width of 12 units. `,
  )
  width: number
}
