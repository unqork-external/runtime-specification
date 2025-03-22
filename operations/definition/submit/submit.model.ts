import { DiscriminatorValue, Required } from '@tsed/schema'

import { SubmitOptions } from './submit.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.SUBMIT)
@Alpha()
@AutogenDisabled()
export class SubmitOperation extends Operation<OperationTypes.SUBMIT> {
  public type = OperationTypes.SUBMIT as const

  @Required()
  public options: SubmitOptions = new SubmitOptions()
}
