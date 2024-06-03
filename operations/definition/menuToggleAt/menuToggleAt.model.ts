import { DiscriminatorValue, Required } from '@tsed/schema'

import { MenuToggleAtOptions } from './menuToggleAt.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.MENU_TOGGLE_AT)
export class MenuToggleAtOperation extends Operation<OperationTypes.MENU_TOGGLE_AT> {
  type = OperationTypes.MENU_TOGGLE_AT as const

  @Required()
  options: MenuToggleAtOptions = new MenuToggleAtOptions()
}
