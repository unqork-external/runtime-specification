import { Description, Required } from '@tsed/schema'

export class ChartPropertyMap {
  @Required()
  @Description('The property name of the X values for the data of the series.')
  x: string

  @Required()
  @Description('The property name of the Y values for the data of the series.')
  y: string
}
