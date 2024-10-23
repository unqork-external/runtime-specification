import { DiscriminatorValue, Required } from '@tsed/schema'

import { OpsBuilderHydrateOperationOptions } from './opsBuilderHydrate.options'
import { UdOnly } from '../../../../decorators/stability'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.OPS_BUILDER_HYDRATE)
@UdOnly()
export class OpsBuilderHydrateOperation extends Operation<OperationTypes.OPS_BUILDER_HYDRATE> {
  @Required()
  public type = OperationTypes.OPS_BUILDER_HYDRATE as const

  @Required()
  public options: OpsBuilderHydrateOperationOptions = new OpsBuilderHydrateOperationOptions()
}
