import { DiscriminatorValue, Required } from '@tsed/schema'

import { ClearValidationErrorsOptions } from './clearValidationErrors.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CLEAR_VALIDATION_ERRORS)
export class ClearValidationErrorOperation extends Operation<OperationTypes.CLEAR_VALIDATION_ERRORS> {
  @Required()
  public options: ClearValidationErrorsOptions = new ClearValidationErrorsOptions()
}
