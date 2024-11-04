import { Description, Required } from '@tsed/schema'

export class ChartPropertyMap {
  @Required()
  @Description('Label or value for the X axis.')
  x: string

  @Required()
  @Description('Value for the Y axis.')
  y: string
}
