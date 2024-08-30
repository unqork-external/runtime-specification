import { Description, Required } from '@tsed/schema'

export class ConfigurationEditorSaveOperationOptions {
  @Required()
  @Description('key of the configurationEditor to target')
  targetKey: string
}
