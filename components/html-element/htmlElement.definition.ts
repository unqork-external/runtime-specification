import { CollectionOf, Description, DiscriminatorValue, Example, Optional, Property, Required } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'
import { Field } from '../../componentComposition/field/component.field.label'

export class AttrObject {
  @Required()
  htmlAttribute: string

  @Required()
  value: string
}

@DiscriminatorValue('htmlelement')
export class HtmlElementDefinition extends BaseComponentDefinition {
  @Required()
  type: string = 'htmlelement'

  @Required()
  @Description(
    trimAll(`
    The HTML content to be rendered.
    Please review our allow lists for renderable HTML content. 
  `),
  )
  content: string

  @Property(Display)
  display: Display = new Display()

  @Property(Field)
  field: Field = new Field()

  @Optional()
  @Example('h1', 'p', 'div')
  @Description(
    trimAll(`
    The HTML Element Tag with which the content will render.
    Please review our allow lists for possible HTML tags. 
  `),
  )
  tag: string

  @Optional()
  @CollectionOf(AttrObject)
  @Example(`
    {
      htmlAttribute: "alt",
      value: "Alternative text"
    }
  `)
  @Description(
    trimAll(`
    The HTML attributes that apply to the top level tag.
    Please review our allow lists for possible HTML attributes. 
  `),
  )
  attributes?: AttrObject[]

  @Optional()
  @Description(
    trimAll(`
    The classes applied to the rendered HTML Element.
  `),
  )
  customClass?: string

  @Optional()
  @Description(
    trimAll(`
    The classes applied to the rendered HTML Element's parent container.
  `),
  )
  className?: string
}
