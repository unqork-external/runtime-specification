import { DiscriminatorValue, Required } from '@tsed/schema'

import { ClearOptions } from './clear.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Clear')
@DiscriminatorValue(OperationTypes.CLEAR)
@Alpha()
@AutogenDisabled()
export class ClearOperation extends Operation<OperationTypes.CLEAR> {
  public type = OperationTypes.CLEAR as const

  @Required()
  public options: ClearOptions = new ClearOptions()
}
