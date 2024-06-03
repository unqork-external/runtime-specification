import { Default, Description, Example } from '@tsed/schema'

import { Label } from '../../component-composition/field/component.field.label'

export class ButtonLabel extends Label {
  @Description('Label Text displayed within the Button.')
  @Default('Submit')
  @Example('Submit')
  text: string = 'Submit'
}
