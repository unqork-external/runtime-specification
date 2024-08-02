import { Description, Enum, Example, Required } from '@tsed/schema'

import { OpenNewPageType } from './openNewPageType.enum'
import { OperationOptions } from '../../interface'

export class OpenNewPageOptions extends OperationOptions {
  @Required()
  @Example('PAGEOPEN')
  @Description('type should be either PAGEOPEN or PAGE')
  @Enum(OpenNewPageType)
  type: OpenNewPageType

  @Required()
  @Example('www.google.com')
  @Description('URL redirect value')
  value: string // URL to redirect or open new tab
}
