import { Description, DiscriminatorValue, Required } from '@tsed/schema'

import { ToggleOptions } from './toggle.options'
import { trimAll } from '../../../../utilities/trimAll/trimAll'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TOGGLE)
@Description(trimAll('Toggle a boolean property. Only works on boolean properties.'))
export class ToggleOperation extends Operation<OperationTypes.TOGGLE> {
  @Required()
  public options: ToggleOptions = new ToggleOptions()
}
