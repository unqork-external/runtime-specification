import { DiscriminatorValue, Required } from '@tsed/schema'

import { OpenNewPageOptions } from './openNewPage.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.OPEN_NEW_PAGE)
export class OpenNewPageOperation extends Operation<OperationTypes.OPEN_NEW_PAGE> {
  public type = OperationTypes.OPEN_NEW_PAGE as const

  @Required()
  public options: OpenNewPageOptions = new OpenNewPageOptions()
}
