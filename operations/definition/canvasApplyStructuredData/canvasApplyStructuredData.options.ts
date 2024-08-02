import { Default, Description, Example, Optional } from '@tsed/schema'

import { TargetedOperationOptions } from '../../interface'

export class CanvasApplyStructuredDataOperationOptions extends TargetedOperationOptions {
  @Optional()
  @Description('the id of layout you want to start collecting from')
  @Example('root')
  @Default('root')
  layoutId?: string

  @Optional()
  @Description('Use to get structured data and override default exclude functionality')
  withExcludes?: boolean

  @Optional()
  @Description('Normalizes all childLayouts to a single array under key "children"')
  normalizeChildren?: boolean

  @Optional()
  @Description('Use to get structured data but only with the values from the desired paths per component')
  @Example('["key"]')
  paths?: string[]
}
