import { Default, Enum, Optional, Required } from '@tsed/schema'

import { dataInputObjectExamples, kpiFormatExamples } from './kpi.examples'
import { Examples, TrimmedDescription } from '../../../decorators'

export type KpiDataInputObject = { id: string }

export enum KpiColor {
  DEFAULT = 'well',
  PRIMARY = 'bg-primary',
  SUCCESS = 'bg-success',
  DANGER = 'bg-danger',
  WARNING = 'bg-warning',
  INFO = 'bg-info',
}

export class kpiData {
  @Required()
  @Examples(dataInputObjectExamples)
  @TrimmedDescription(`
    The id of the data object to display as the KPI Value with the specified formatting.
  `)
  dataInputObject: KpiDataInputObject

  @Optional()
  @Enum(KpiColor)
  @Default(KpiColor.DEFAULT)
  @TrimmedDescription(`
    The background color and text color applied to the KPI wrapper element.
  `)
  // NOT ACTUALLY A COLOR.
  // This is actually just a predefined CSS class in the Unqork stylesheet
  kpiColor: string = KpiColor.DEFAULT

  @Optional()
  @Default('black')
  @TrimmedDescription(`
    The text color of the KPI Title and Value.
  `)
  // Unlike kpiColor, this actually appears to be able to be any color string
  kpiColorText: string = 'black'

  @Optional()
  @Examples(kpiFormatExamples)
  @TrimmedDescription(`
    Optional formatting applied to the displayed value.
  `)
  kpiFormat?: string

  @Optional()
  @Default(150)
  @TrimmedDescription(`
    The height of the KPI component. This also affects the size of of any Font Awesome icons used and
    the font size of the Title and Value text.
  `)
  kpiHeight: number = 150

  @Optional()
  @TrimmedDescription(`
    Optional Font Awesome icon string to be displayed on the KPI Component.
  `)
  kpiIcon?: string

  @Optional()
  @TrimmedDescription(`
    The Title to display on the KPI Component.
  `)
  kpiTitle?: string
}
