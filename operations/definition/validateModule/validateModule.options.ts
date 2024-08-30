import { Description, Example, Required } from '@tsed/schema'

export class ValidateModuleOperationOptions {
  @Required()
  targetKey: string

  @Required()
  @Example('61bbaa60a09767a940406543')
  @Description('The id of the intended module to validate')
  moduleId: string
}
