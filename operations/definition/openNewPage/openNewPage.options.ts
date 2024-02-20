import { CollectionOf, Description, Enum, Example, Optional, Required } from '@tsed/schema'

import { OpenNewPageType } from './openNewPageType.enum'
import { InputRef } from '../../../inputs/inputRef'

export class OpenNewPageOptions {
  @Required()
  @Example('PAGEOPEN')
  @Description('type should be either PAGEOPEN or PAGE')
  @Enum(OpenNewPageType)
  type: OpenNewPageType

  @Required()
  @Example('www.google.com')
  @Description('URL redirect value')
  value: string // URL to redirect or open new tab

  @Optional()
  @Example('[{targetKey: textfield, alias: A, required: true }]')
  @Description('Input field includes key of target, alias of target, target required to be existed ')
  @CollectionOf(InputRef)
  inputs?: InputRef[]
}
