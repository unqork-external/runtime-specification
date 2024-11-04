import { Description, Optional } from '@tsed/schema'

export class ChartText {
  @Optional()
  @Description('Text content.')
  text?: string
}
