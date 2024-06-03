import { Description, Optional, Required } from '@tsed/schema'

import { CheckboxesTransformOptions } from './checkboxes.option.transform'

export class CheckboxesReferenceKeyModel {
  @Required()
  @Description('The target entity to refer to.')
  target: string

  @Required()
  @Description('The JSONPath representation of what JSON key want to read from.')
  property: string

  @Optional()
  transformOptions: CheckboxesTransformOptions = new CheckboxesTransformOptions()
}
