import { Default, Description, DiscriminatorValue, Property, Required, Optional } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'

@DiscriminatorValue('richtexteditorcentauriv1')
export class RichTextEditorCentauriV1ComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'richtexteditorcentauriv1' = 'richtexteditorcentauriv1' as const

  @Property(Display)
  display: Display = new Display()

  @Description('Value of the RTE as an HTML string.')
  declare value: string

  @Description('Hide the toolbar.')
  @Optional()
  @Default(false)
  noToolbar: boolean = false

  @Description('Label for the RTE')
  @Optional()
  label?: string

  @Description('Skip loading customer.css in the editor iframe')
  @Optional()
  @Default(false)
  skipCustomerCSS?: boolean = false
}
