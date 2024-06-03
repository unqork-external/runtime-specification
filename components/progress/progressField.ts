import { Optional, Default, Description, Property } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { Field } from '../../component-composition/field/component.field.label'
import { InputLabel } from '../../component-composition/input/component.input'

export class ProgressField extends Field {
  @Property(InputLabel)
  @TrimmedDescription(`
    Appears above the progress component to inform what information is being represented. 
    Labels also help to identify the component on the Module Editor.
  `)
  label: InputLabel = new InputLabel()

  @Default(0)
  @Description('The minimum value for the progress to be considered valid. Used by "meter".')
  min?: number = 0

  @Default(1)
  @Description('The maximum amount that "value" can represent.')
  max?: number = 1

  @Optional()
  @Description('The upper numeric bound of the low end of the measured range. Used by "meter".')
  low?: number

  @Optional()
  @Description('The lower numeric bound of the high end of the measured range. Used by "meter".')
  high?: number

  @Optional()
  @Description('This attribute indicates the optimal numeric value. Used by "meter".')
  optimum?: number

  @Optional()
  @Description('Custom class name for component.')
  customClass?: string

  @Optional()
  @Description('Alternative progress text used by screen reader.')
  screenReader?: string

  @TrimmedDescription(`
    Tooltips are floating texts that appear when the cursor is positioned over an icon.
    They can span across multiple lines and provide hints about the requested data.
    Setting this property will make a question mark icon to be displayed 
    on the right side of the component's label, and once the user hovers over it, 
    the tooltip text will appear. Moving the cursor outside the icon's area hides the tooltip.
    Hiding the component's label automatically hides the tooltip.
  `)
  tooltipDescription?: string
}
