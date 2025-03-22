import { DiscriminatorValue, Required } from '@tsed/schema'

import { LoadModuleOperationOptions } from './loadModule.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.LOAD_MODULE)
@Alpha()
@AutogenDisabled()
export class LoadModuleOperation extends Operation<OperationTypes.LOAD_MODULE> {
  public type = OperationTypes.LOAD_MODULE as const

  @Required()
  public options: LoadModuleOperationOptions = new LoadModuleOperationOptions()
}
