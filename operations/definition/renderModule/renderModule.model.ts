import { DiscriminatorValue, Required } from '@tsed/schema'

import { RenderModuleOperationOptions } from './renderModule.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.RENDER_MODULE)
@Alpha()
@AutogenDisabled()
export class RenderModuleOperation extends Operation<OperationTypes.RENDER_MODULE> {
  public type = OperationTypes.RENDER_MODULE as const

  @Required()
  public options: RenderModuleOperationOptions = new RenderModuleOperationOptions()
}
