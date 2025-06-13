import { Description } from '@tsed/schema'

import { RichTextEditorCentauriV2Targets } from './richTextEditorCentauriV2Targets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

@Description('The possible targets for Rich Text Editor v1 component styling.')
export class RichTextEditorCentauriV2StylingTargets implements TargetsModel<RichTextEditorCentauriV2Targets> {
  @Description("Adds styles to RTE's root ComponentWrapper.")
  @Css()
  [RichTextEditorCentauriV2Targets.root]: CssClassOrProps;

  @Description("Adds styles to RTE's label element.")
  @Css()
  [RichTextEditorCentauriV2Targets.label]: CssClassOrProps;

  @Description("Adds styles to RTE's tooltip element.")
  @Css()
  [RichTextEditorCentauriV2Targets.tooltip]: CssClassOrProps;

  @Description("Adds styles to RTE's helper text element.")
  @Css()
  [RichTextEditorCentauriV2Targets.helperText]: CssClassOrProps;

  @Description("Adds styles to RTE's error message element.")
  @Css()
  [RichTextEditorCentauriV2Targets.errorMessage]: CssClassOrProps;

  @Description("Adds styles to RTE's tooltip button element.")
  @Css()
  [RichTextEditorCentauriV2Targets.tooltipButton]: CssClassOrProps;

  @Description("Adds styles ] the RTE's tooltip popover element.")
  @Css()
  [RichTextEditorCentauriV2Targets.tooltipPopover]: CssClassOrProps
}

@Description('An object containing stylings for the component.')
export class RichTextEditorCentauriV2Styling extends StylingModel<RichTextEditorCentauriV2StylingTargets> {
  declare targets: RichTextEditorCentauriV2StylingTargets
}
