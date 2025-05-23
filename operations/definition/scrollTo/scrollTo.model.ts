import { DiscriminatorValue, Required } from '@tsed/schema'

import { ScrollToOptions } from './scrollTo.options'
import { TrimmedDescription, Beta, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('ScrollTo')
@DiscriminatorValue(OperationTypes.SCROLL_TO)
@TrimmedDescription(`
  Scrolls the page to a target element or the top of the page.
`)
@Beta()
@AutogenDisabled()
export class ScrollToOperation extends Operation<OperationTypes.SCROLL_TO> {
  public type = OperationTypes.SCROLL_TO as const

  @Required()
  public options: ScrollToOptions = new ScrollToOptions()
}
