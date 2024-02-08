import { DiscriminatorValue, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'

@DiscriminatorValue('richTextEditor')
export class RichTextEditorComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'richTextEditor' = 'richTextEditor' as const

  @Property()
  initialContent: string

  @Property(Display)
  display: Display = new Display()

  @Property()
  editorState: any

  @Property()
  declare value: string
}
