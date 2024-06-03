import { Description, Optional } from '@tsed/schema'

import { htmlAttributeExamples, valueExamples } from './htmlElement.examples'
import { Examples } from '../../../decorators/schema/examples.decorator'

export class AttrObject {
  @Optional()
  @Description('Additional attribute to configure the top level tag.')
  @Examples(htmlAttributeExamples)
  htmlAttribute: string

  @Optional()
  @Description('Value of the specific attribute.')
  @Examples(valueExamples)
  value: string
}
