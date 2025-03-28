import { Any, Default, Description, Minimum, Optional } from '@tsed/schema'

import { ReflexiveDecorator } from '../../../../../decorators'

export class MuiColumnSizingDefinition {
  @Optional()
  @Default(180)
  @Description('The size of the column in pixels. The default value is 180px.')
  size: number = 180

  @Optional()
  @Description(`The minimum size of the column in pixels.`)
  minSize?: number

  @Optional()
  @Description(`The maximum size of the column in pixels.`)
  maxSize?: number

  @Optional()
  @Default(1)
  @Minimum(0)
  @Description(`
    Should the column grow to fill the remaining space? When set to a number, the number represents the proportion of the table's free space, if any, that should be added to the column width. Must be a positive number. A value of 0 or false will prevent the column from growing. A value of true is the same as a value of 1.
  `)
  @Any('number', 'boolean')
  grow: number | boolean = 1
}
