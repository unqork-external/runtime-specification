import { CollectionOf, Const, Default, DiscriminatorValue, Optional } from '@tsed/schema'

import { AttrObject } from './htmlElement.attributes'
import { attributesExamples, tagExamples } from './htmlElement.examples'
import { HtmlElementField } from './htmlElement.field'
import { HtmlElementStyling } from './htmlElement.styling'
import { HtmlElementTargets } from './htmlElement.targets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { type SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@DiscriminatorValue('htmlelement')
@TrimmedDescription(`
  The HTML Element component adds HTML formatting into your application. 
  It provides us with options to choose any HTML tags that are safe to use and setup attributes for these tags.
`)
@ViewTargets(HtmlElementTargets)
export class HtmlElementDefinition extends BaseComponentDefinition {
  @Const('htmlelement')
  type: 'htmlelement' = 'htmlelement' as const

  @Optional()
  display: Display = new Display()

  @Optional()
  field: HtmlElementField = new HtmlElementField()

  @Optional()
  @Default('')
  @TrimmedDescription(`
    The HTML content to be rendered.
    Please review our allow lists for renderable HTML content. 
  `)
  content: string = ''

  @Optional()
  @Default('div')
  @Examples(tagExamples)
  @TrimmedDescription(`
    The HTML Element Tag with which the content will render.
    Please review our allow lists for possible HTML tags. 
  `)
  tag: string = 'div'

  @Optional()
  @CollectionOf(AttrObject)
  @Examples(attributesExamples)
  @TrimmedDescription(`
    The HTML attributes that apply to the top level tag.
    Please review our allow lists for possible HTML attributes. 
  `)
  attributes?: AttrObject[]

  @Optional()
  declare signals?: SignalTargets<HtmlElementTargets>

  @Optional()
  @Examples(targetedStylingExample)
  declare styling?: HtmlElementStyling
}
