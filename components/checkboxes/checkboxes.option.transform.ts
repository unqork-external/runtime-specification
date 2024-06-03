import { Default, Description, Example, Optional } from '@tsed/schema'

@Example({ valueLocation: 'value', labelLocation: 'label' })
@Description('Location of value and label for the options.')
export class CheckboxesTransformOptions {
  @Optional()
  @Default('value')
  @Description('Location of value.')
  valueLocation = 'value'

  @Optional()
  @Default('label')
  @Description('Location of label.')
  labelLocation = 'label'
}
