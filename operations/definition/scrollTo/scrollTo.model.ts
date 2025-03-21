import { DiscriminatorValue, Required } from '@tsed/schema'

import { ScrollToOptions } from './scrollTo.options'
import { TrimmedDescription, Beta } from '../../../../decorators'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SCROLL_TO)
@TrimmedDescription(`
  ScrollToOperation will scroll the page in relation to the targetElementKey.
  If targetElementKey is unset, it will scroll to the top of the page.
`)
@Beta()
export class ScrollToOperation extends Operation<OperationTypes.SCROLL_TO> {
  public type = OperationTypes.SCROLL_TO as const

  @Required()
  public options: ScrollToOptions = new ScrollToOptions()
}
