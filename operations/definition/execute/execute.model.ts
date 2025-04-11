import { DiscriminatorValue, Required } from '@tsed/schema'

import { ExecuteOptions } from './execute.options'
import { DisplayName } from '../../../../decorators'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'
import { Stable } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Execute')
@DiscriminatorValue(OperationTypes.EXECUTE)
@TrimmedDescription(`
  The Execute Operation allows users to invoke operations defined on the "EXECUTE" key.
  This is a way to call a concept of a function on a different component.
`)
@Stable()
export class ExecuteOperation extends Operation<OperationTypes.EXECUTE> {
  public type = OperationTypes.EXECUTE as const

  @Required()
  public options: ExecuteOptions = new ExecuteOptions()
}
