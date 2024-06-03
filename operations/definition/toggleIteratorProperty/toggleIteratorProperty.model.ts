import { DiscriminatorValue, Required } from '@tsed/schema'

import { ToggleIteratorPropertyOperationOptions } from './toggleIteratorProperty.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.TOGGLE_ITERATOR_PROPERTY)
export class ToggleIteratorPropertyOperation extends Operation<OperationTypes.TOGGLE_ITERATOR_PROPERTY> {
  @Required()
  public type = OperationTypes.TOGGLE_ITERATOR_PROPERTY as const

  @Required()
  public options: ToggleIteratorPropertyOperationOptions = new ToggleIteratorPropertyOperationOptions()
}
