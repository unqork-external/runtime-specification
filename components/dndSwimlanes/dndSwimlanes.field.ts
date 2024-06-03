import { Default, Description, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { Field } from '../../component-composition/field/component.field.label'
import { InputLabel } from '../../component-composition/input/component.input'

export class DndSwimlanesField extends Field {
  @Optional()
  @TrimmedDescription(`
    Appears above the swimlane to inform what information is being displayed. 
    Labels also help to identify the component on the Module Editor.
  `)
  label: InputLabel = new InputLabel()

  @Optional()
  @Default(true)
  @Description('If we should show the lane headers.')
  showLaneHeader: boolean = true

  @Optional()
  @Default(true)
  @Description('If, in the header, we should show a count of the number of items in the lane.')
  showLaneCount: boolean = true
}
