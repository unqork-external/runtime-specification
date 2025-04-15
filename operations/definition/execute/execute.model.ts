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
  Invokes Operations defined on the 'On Execute' Event for other components. 
  When a logic component is specified as a 'Target Key', triggers the logic component.
`)
@Stable()
export class ExecuteOperation extends Operation<OperationTypes.EXECUTE> {
  public type = OperationTypes.EXECUTE as const

  @Required()
  public options: ExecuteOptions = new ExecuteOptions()
}
