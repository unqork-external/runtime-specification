import { DiscriminatorValue, Required } from '@tsed/schema'

import { AutocompleteOperationOptions } from './autocomplete.options'
import { Alpha } from '../../../../decorators'
import { AutogenDisabled } from '../../decorators/autogenDisabled.decorator'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.AUTOCOMPLETE)
@Alpha()
@AutogenDisabled()
export class AutocompleteOperation extends Operation<OperationTypes.AUTOCOMPLETE> {
  public type = OperationTypes.AUTOCOMPLETE as const

  @Required()
  public options: AutocompleteOperationOptions = new AutocompleteOperationOptions()
}
