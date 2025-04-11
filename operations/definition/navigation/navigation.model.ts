import { DiscriminatorValue, Required } from '@tsed/schema'

import { NavigationOperationOptions } from './navigation.options'
import { Alpha, DisplayName } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DisplayName('Navigation')
@DiscriminatorValue(OperationTypes.NAVIGATION)
@Alpha()
@AutogenDisabled()
export class NavigationOperation extends Operation<OperationTypes.NAVIGATION> {
  public type = OperationTypes.NAVIGATION as const

  @Required()
  public options: NavigationOperationOptions = new NavigationOperationOptions()
}
