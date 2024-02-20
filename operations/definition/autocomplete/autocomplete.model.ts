import { DiscriminatorValue, Required } from '@tsed/schema'

import { AutocompleteOperationOptions } from './autocomplete.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.AUTOCOMPLETE)
export class AutocompleteOperation extends Operation<OperationTypes.AUTOCOMPLETE> {
  public type = OperationTypes.AUTOCOMPLETE as const

  @Required()
  public options: AutocompleteOperationOptions = new AutocompleteOperationOptions()
}
