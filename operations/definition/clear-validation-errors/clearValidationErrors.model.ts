import { DiscriminatorValue, Required } from '@tsed/schema'

import { ClearValidationErrorsOptions } from './clearValidationErrors.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CLEAR_VALIDATION_ERRORS)
@Alpha()
@AutogenDisabled()
export class ClearValidationErrorOperation extends Operation<OperationTypes.CLEAR_VALIDATION_ERRORS> {
  public type = OperationTypes.CLEAR_VALIDATION_ERRORS as const

  @Required()
  public options: ClearValidationErrorsOptions = new ClearValidationErrorsOptions()
}
