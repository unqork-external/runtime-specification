import { DiscriminatorValue, Required } from '@tsed/schema'

import { LoadModuleOperationOptions } from './loadModule.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.LOAD_MODULE)
export class LoadModuleOperation extends Operation<OperationTypes.LOAD_MODULE> {
  @Required()
  public options: LoadModuleOperationOptions = new LoadModuleOperationOptions()
}
