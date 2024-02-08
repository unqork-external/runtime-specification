import { Const, Default, Description, DiscriminatorValue, Nullable, Property } from '@tsed/schema'

import { CalendarView } from './calendarView'
import { DateFormat } from './dateFormat'
import { DateValidation } from './dateValidation'
import { DateInputSimpleViewModel } from './simpleView/dateInputSimpleView.model'
import { DateInputStyling } from './styling/dateInput.styling'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { InputField } from '../../componentComposition/input/component.input'

@DiscriminatorValue('dateinput')
export class DateInputComponentDefinition extends BaseComponentDefinition {
  @Const('dateinput')
  @Description('Type of the component.')
  type: 'dateinput' = 'dateinput' as const

  @Property()
  @Default(false)
  useSimpleView?: boolean = false

  @Property()
  simpleView?: DateInputSimpleViewModel = new DateInputSimpleViewModel()

  @Property(Display)
  display: Display = new Display()

  @Property(InputField)
  @Description('Field settings of the dateinput.')
  field: InputField = new InputField()

  @Property(CalendarView)
  @Description('Calendar settings.')
  calendarView: CalendarView = new CalendarView()

  @Property(DateFormat)
  @Description('Date format settings.')
  format: DateFormat = new DateFormat()

  @Property(DateValidation)
  @Description('Validation settings.')
  validation: DateValidation = new DateValidation()

  @Nullable(String)
  @Description('Value of the component.')
  declare value?: string | null

  @Description(
    trimAll(`
    Custom styling definition.
    For each target string, a user may define a CSS class or CSS object that will
    override the default styles of the targeting elements in the component.
  `),
  )
  @Property()
  styling: DateInputStyling
}
