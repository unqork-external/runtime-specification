import { TargetedOperationOptions } from '../../interface'

export class ConfigurationEditorToggleReflexiveInputOperationOptions extends TargetedOperationOptions {
  pathToValue: string
  expectedResult: unknown
}
