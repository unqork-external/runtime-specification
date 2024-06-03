import { Const, Default, Description, DiscriminatorValue, Optional } from '@tsed/schema'

import { CalendarView } from './calendarView'
import { DateFormat } from './dateFormat'
import { DateInputStyling } from './dateInput.styling'
import { DateInputSimpleViewModel } from './dateInputSimpleView.model'
import { DateValidation } from './dateValidation'
import { DateInputTargets } from './targets/dateInputTargets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display, InputField } from '../../component-composition'
import { type SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('dateinput')
@ViewTargets(DateInputTargets)
@Description(
  trimAll(`
    The Date Input component lets your end-user enter or select a date from a specific date range. 
    By default, all Date Input entries store using the YYYY-MM-DD format and include a timestamp of midnight (00:00) in Coordinated Universal Time (UTC). 
  `),
)
export class DateInputComponentDefinition extends BaseComponentDefinition {
  @Const('dateinput')
  type: 'dateinput' = 'dateinput' as const

  @Optional()
  @Default(false)
  @Description('Boolean used to determine if the underlying view is simple and un-styled')
  useSimpleView: boolean = false

  @Optional()
  simpleView: DateInputSimpleViewModel = new DateInputSimpleViewModel()

  @Optional()
  display: Display = new Display()

  @Optional()
  field: InputField = new InputField()

  @Optional()
  calendarView: CalendarView = new CalendarView()

  @Optional()
  format: DateFormat = new DateFormat()

  @Optional()
  validation: DateValidation = new DateValidation()

  @Optional()
  declare value?: string | null

  @Optional()
  declare signals?: SignalTargets<DateInputTargets>

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: DateInputStyling
}
