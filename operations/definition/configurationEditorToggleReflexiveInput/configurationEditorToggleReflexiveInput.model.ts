import { DiscriminatorValue, Required } from '@tsed/schema'

import { ConfigurationEditorToggleReflexiveInputOperationOptions } from './configurationEditorToggleReflexiveInput.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CONFIGURATION_EDITOR_TOGGLE_REFLEXIVE_INPUT)
export class ConfigurationEditorToggleReflexiveInputOperation extends Operation<OperationTypes.CONFIGURATION_EDITOR_TOGGLE_REFLEXIVE_INPUT> {
  @Required()
  public type = OperationTypes.CONFIGURATION_EDITOR_TOGGLE_REFLEXIVE_INPUT as const

  @Required()
  public options: ConfigurationEditorToggleReflexiveInputOperationOptions =
    new ConfigurationEditorToggleReflexiveInputOperationOptions()
}
