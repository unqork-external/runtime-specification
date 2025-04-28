import { Description } from '@tsed/schema'

import { RichTextEditorCentauriV1Targets } from './richTextEditorCentauriV1Targets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

@Description('The possible targets for Rich Text Editor v1 component styling.')
export class RichTextEditorCentauriV1StylingTargets implements TargetsModel<RichTextEditorCentauriV1Targets> {
  @Description('Adds styles to Rich Text Editor v1 root ComponentWrapper.')
  @Css()
  [RichTextEditorCentauriV1Targets.root]: CssClassOrProps;

  @Description('Adds styles to Rich Text Editor v1 label element.')
  @Css()
  [RichTextEditorCentauriV1Targets.label]: CssClassOrProps
}

@Description('An object containing styling for the component.')
export class RichTextEditorCentauriV1Styling extends StylingModel<RichTextEditorCentauriV1StylingTargets> {
  declare targets: RichTextEditorCentauriV1StylingTargets
}
