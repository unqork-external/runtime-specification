import { DiscriminatorValue, Required } from '@tsed/schema'

import { NavigationOperationOptions } from './navigation.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.NAVIGATION)
export class NavigationOperation extends Operation<OperationTypes.NAVIGATION> {
  public type = OperationTypes.NAVIGATION as const

  @Required()
  public options: NavigationOperationOptions = new NavigationOperationOptions()
}
