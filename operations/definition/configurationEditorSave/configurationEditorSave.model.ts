import { DiscriminatorValue, Required } from '@tsed/schema'

import { ConfigurationEditorSaveOperationOptions } from './configurationEditorSave.options'
import { OperationTypes } from '../../enums/operation-types.enum'
import { Operation } from '../../interface/operations.interface'

@DiscriminatorValue(OperationTypes.CONFIGURATION_EDITOR_SAVE)
export class ConfigurationEditorSaveOperation extends Operation<OperationTypes.CONFIGURATION_EDITOR_SAVE> {
  @Required()
  public type = OperationTypes.CONFIGURATION_EDITOR_SAVE as const

  @Required()
  public options: ConfigurationEditorSaveOperationOptions = new ConfigurationEditorSaveOperationOptions()
}
