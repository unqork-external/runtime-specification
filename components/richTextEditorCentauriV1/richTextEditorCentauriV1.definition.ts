import { Default, Description, DiscriminatorValue, Property, Required, Optional } from '@tsed/schema'

import { RichTextEditorCentauriV1Styling } from './richTextEditorCentauriV1.styling'
import { RichTextEditorCentauriV1Targets } from './richTextEditorCentauriV1Targets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'
import { targetedStylingExample } from '../../styling/targeted.styling.example'

@TrimmedDescription(`  
   A ported version of the Rich Text Editor v1 from Centauri.  
   This component allows users to input and format rich text content like modern word processor tools.  
   The RTE gives the following abilities to users: Format and style text, spell-check content, 
   paste content from external sources, including Microsoft Word, add images, and maximizing of the Editor window for full-screen viewing.  
   This component uses ckeditor4.  
`)
@DiscriminatorValue('richtexteditorcentauriv1')
@ViewTargets(RichTextEditorCentauriV1Targets)
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
  skipCustomerCSS: boolean = false

  @Optional()
  @TrimmedDescription(`
    Adds a custom CSS class to the component. This is useful for targeting this component to apply custom styles.
  `)
  customClass?: string

  @Examples(targetedStylingExample)
  declare styling: RichTextEditorCentauriV1Styling
}
