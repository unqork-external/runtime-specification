import { Description, Property } from '@tsed/schema'

import { CodeEditorTargets } from './codeEditorTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../styling/cssClassOrProps.type'
import { StylingModel } from '../../styling/styling.model'
import { TargetsModel } from '../../viewTargets/targets.model'

export class CodeEditorStyleTargets implements TargetsModel<CodeEditorTargets> {
  @Description('Adds styles to Code Editor root ComponentWrapper.')
  @Css()
  [CodeEditorTargets.root]: CssClassOrProps;

  @Description('Adds styles to Code Editor input element (where user types in code).')
  @Css()
  [CodeEditorTargets.input]: CssClassOrProps;

  @Description("Adds styles to Code Editor's input element when the user has typed incorrect JSON")
  @Css()
  [CodeEditorTargets.inputWithJSONError]: CssClassOrProps;

  @Description('Adds styles to the error message displayed when invalid JSON is entered (and valueIsObject is true)')
  @Css()
  [CodeEditorTargets.errorMessage]: CssClassOrProps;

  @Description('Adds styles to Code Editor label element.')
  @Css()
  [CodeEditorTargets.label]: CssClassOrProps;

  @Description('Adds styles to Code Editor tooltip element.')
  @Css()
  [CodeEditorTargets.tooltip]: CssClassOrProps;

  @Description('Adds styles to Code Editor tooltip button element.')
  @Css()
  [CodeEditorTargets.tooltipButton]: CssClassOrProps;

  @Description('Adds styles to Code Editor tooltip popover element.')
  @Css()
  [CodeEditorTargets.tooltipPopover]: CssClassOrProps;

  @Description('Adds styles to Code Editor helper text element.')
  @Css()
  [CodeEditorTargets.helperText]: CssClassOrProps
}

export class CodeEditorStyling extends StylingModel<CodeEditorStyleTargets> {
  targets: CodeEditorStyleTargets
}
