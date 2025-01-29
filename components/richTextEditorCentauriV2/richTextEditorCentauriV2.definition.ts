import { Description, DiscriminatorValue, Property, Required, Optional } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'

@DiscriminatorValue('richtexteditorcentauriv2')
export class RichTextEditorCentauriV2ComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'richtexteditorcentauriv2' = 'richtexteditorcentauriv2' as const

  @Property(Display)
  display: Display = new Display()

  @Description('Value of the RTE as an HTML string')
  declare value: string

  @Description('Label for the RTE')
  @Optional()
  label?: string

  @Description('Enable comments')
  @Optional()
  enableComments?: boolean

  @Description('Enable track changes')
  @Optional()
  enableTrackChanges?: boolean

  @Description('Placeholder text')
  @Optional()
  placeholder?: string
}
