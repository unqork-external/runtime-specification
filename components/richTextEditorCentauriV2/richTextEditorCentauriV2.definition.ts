import { Description, DiscriminatorValue, Property, Required, Optional } from '@tsed/schema'

import { RichTextEditorCentauriV2Styling } from './richTextEditorCentauriV2.styling'
import { RichTextEditorValue } from './richTextEditorCentauriV2.types'
import { RichTextEditorCentauriV2Targets } from './richTextEditorCentauriV2Targets.enum'
import { Examples } from '../../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { ViewTargets } from '../../../decorators/viewTargets/viewTargets.decorator'
import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { InputField } from '../../component-composition'
import { Display } from '../../component-composition/display/component.display'
import type { SignalTargets } from '../../signals'
import { targetedStylingExample } from '../../styling/targeted.styling.example'
import { Validation } from '../../validations'

@TrimmedDescription(`
   A ported version of the Rich Text Editor v2 from Centauri.
   This component allows users to input and format rich text content like modern word processor tools.
   The RTE gives the following abilities to users: Format and style text, spell-check content,
   paste content from external sources, including Microsoft Word/Excel, add images, and maximizing of the Editor window for full-screen viewing.
   This component uses CKEditor 5.
`)
@DiscriminatorValue('richtexteditorcentauriv2')
@ViewTargets(RichTextEditorCentauriV2Targets)
export class RichTextEditorCentauriV2ComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'richtexteditorcentauriv2' = 'richtexteditorcentauriv2' as const

  @Property()
  display: Display = new Display()

  @Description('Field settings of the RTE')
  field: InputField = new InputField()

  @Optional()
  value: RichTextEditorValue = new RichTextEditorValue()

  @Description('Enable comments')
  @Optional()
  enableComments?: boolean

  @Description('Enable track changes')
  @Optional()
  enableTrackChanges?: boolean

  @Optional()
  validation: Validation = new Validation()

  @Property()
  declare signals: SignalTargets<RichTextEditorCentauriV2Targets>

  @Examples(targetedStylingExample)
  declare styling: RichTextEditorCentauriV2Styling
}
