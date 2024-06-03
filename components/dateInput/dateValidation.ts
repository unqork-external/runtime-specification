import { Default, Description, Enum, Example, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { DateInputLimit, DateInputRelation, DateInputUnit } from '../../base-types'
import { Validation } from '../../validations/validation'

@Description('Controls what date values are treated as valid')
export class DateValidation extends Validation {
  @Optional()
  @Enum(DateInputLimit)
  @Example(DateInputLimit.FUTURE, DateInputLimit.BEFORE)
  @Default(DateInputLimit.NONE)
  @Description('Set restrictions for acceptable dates that the end-user can input.')
  dateLimit: DateInputLimit = DateInputLimit.NONE

  @Optional()
  @Example('1970-01-01T00:00:00.000Z', '2022-10-10T00:00:00.000Z')
  @Description('If date restriction is set, it defaults to 1970-01-30T00:00:00.000Z.')
  absoluteDate?: string

  @Optional()
  @Example('1970-01-01T00:00:00.000Z', '2023-06-12T00:00:00.000Z')
  @TrimmedDescription(`
    This setting has effect if "After" is selected, or "Between" is selected and "betweenRelationStart" is set to "absolute".
    It marks the lower bound to acceptable dates the end-user can input.
  `)
  absoluteStartDate?: string

  @Optional()
  @Example('1980-01-01T00:00:00.000Z', '2023-06-16T00:00:00.000Z')
  @TrimmedDescription(`
    This setting has effect if "Before" is selected, or "Between" is selected and "betweenRelationEnd" is set to "absolute".
    It marks the upper bound to acceptable dates the end-user can input.
  `)
  absoluteEndDate?: string

  @Optional()
  @Example(DateInputRelation.NOW, DateInputRelation.ABSOLUTE)
  @Enum(DateInputRelation)
  @TrimmedDescription(`
    This setting the type of date that must be calculated for the bound for the lower bound of the restrictions.
    Setting this to "absolute" means that the date is not related to the current date.
    Setting this to "relative" means that the date will be calculated from the current date.
    Setting this to “now" means that the lower bound will be the current date.
    Setting this to infinite removes the lower bound from the restrictions.
  `)
  betweenRelationStart?: DateInputRelation

  @Optional()
  @Example(DateInputRelation.NOW, DateInputRelation.ABSOLUTE)
  @Enum(DateInputRelation)
  @TrimmedDescription(`
    This setting the type of date that must be calculated for the bound for the upper bound of the restrictions.
    Setting this to "absolute" means that the date is not related to the current date.
    Setting this to "relative" means that the date will be calculated from the current date.
    Setting this to “now" means that the upper bound will be the current date.
    Setting this to infinite removes the upper bound from the restrictions.
  `)
  betweenRelationEnd?: DateInputRelation

  @Optional()
  @Enum(DateInputUnit)
  @Example(DateInputUnit.DAYS, DateInputUnit.YEARS)
  @TrimmedDescription(`
    This setting only applies if "Between" is selected and "betweenRelationStart" is set to "relative"
    Unit type to calculate the lower bound from the current date.
    To use in conjunction with "betweenNumStart".
  `)
  betweenUnitStart?: DateInputUnit

  @Optional()
  @Enum(DateInputUnit)
  @Example(DateInputUnit.DAYS, DateInputUnit.YEARS)
  @TrimmedDescription(`
    This setting only applies if "Between" is selected and "betweenRelationEnd" is set to "relative"
    Unit type to calculate the upper bound from the current date.
    To use in conjunction with "betweenNumEnd".
  `)
  betweenUnitEnd?: DateInputUnit

  @Optional()
  @Example(1, 10)
  @TrimmedDescription(`
    This setting only applies if "Between" is selected and "betweenRelationStart" is set to "relative"
    The number of "betweenUnitStart" to calculate the lower bound from the current date.
  `)
  betweenNumStart?: number

  @Optional()
  @Example(1, 10)
  @TrimmedDescription(`
    This setting only applies if "Between" is selected and "betweenRelationEnd" is set to "relative"
    The number of "betweenUnitEnd" to calculate the upper bound from the current date.
  `)
  betweenNumEnd?: number
}
