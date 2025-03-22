import { DiscriminatorValue, Required } from '@tsed/schema'

import { OpenNewPageOptions } from './openNewPage.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.OPEN_NEW_PAGE)
@Alpha()
@AutogenDisabled()
export class OpenNewPageOperation extends Operation<OperationTypes.OPEN_NEW_PAGE> {
  public type = OperationTypes.OPEN_NEW_PAGE as const

  @Required()
  public options: OpenNewPageOptions = new OpenNewPageOptions()
}
