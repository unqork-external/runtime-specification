import { Default, Description, Enum, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class ScrollToOptions {
  @Optional()
  @TrimmedDescription(`
    TODO: Rename to targetKey
    "targetElementKey" describes where to scroll the view to.
    If "targetElementKey" is not set, it will scroll to the top of the view.
  `)
  targetElementKey?: string

  @Optional()
  @Default('start')
  @Description('Defines vertical alignment')
  @Enum('start', 'center', 'end', 'nearest')
  block?: 'start' | 'center' | 'end' | 'nearest' = 'start'

  @Optional()
  @Default('nearest')
  @Description('Defines horizontal alignment')
  @Enum('start', 'center', 'end', 'nearest')
  inline?: 'start' | 'center' | 'end' | 'nearest' = 'nearest'
}
