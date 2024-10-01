import { Default, Description, Optional } from '@tsed/schema'

export class MuiColumnSizingDefinition {
  @Optional()
  @Default(true)
  @Description(`Flag for resizing column width`)
  enableResizing?: boolean = true

  @Optional()
  @Default(180)
  @Description(`The size in pixels of the column. Default value is 180px`)
  size? = 180

  @Optional()
  @Default(40)
  @Description(`The minimum size in pixels of the column. Default value is 40px`)
  minSize? = 40

  @Optional()
  @Default(Number.MAX_SAFE_INTEGER)
  @Description(`The maximum size in pixels of the column. Default value is ~2^53px`)
  maxSize? = Number.MAX_SAFE_INTEGER

  @Optional()
  @Default(true)
  @Description(`Should the column grow to fill the remaining space?`)
  grow? = true
}
