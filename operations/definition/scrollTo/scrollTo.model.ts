import { DiscriminatorValue, Required } from '@tsed/schema'

import { ScrollToOptions } from './scrollTo.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SCROLL_TO)
export class ScrollToOperation extends Operation<OperationTypes.SCROLL_TO> {
  @Required()
  public options: ScrollToOptions = new ScrollToOptions()
}
