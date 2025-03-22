import { Default, Description, Enum, Optional, Ignore } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { OperationOptions } from '../../interface'

export class ScrollToOptions extends OperationOptions {
  @Optional()
  @TrimmedDescription(`
    "targetKey" describes where to scroll the view to.
    If targetKey is unset, it will scroll to the top of the page.
  `)
  targetKey?: string

  /**
   * This property has been deprecated in favor of targetKey on 3.20.25
   * via https://unqork-jira.atlassian.net/browse/UQE-9881. It exists so
   * that we can gracefully handle existing configurations.
   */
  @Ignore()
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
