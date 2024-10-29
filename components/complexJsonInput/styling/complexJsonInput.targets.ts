import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { TargetsModel } from '../../../viewTargets/targets.model'
import { ComplexJsonInputTargetsEnum } from '../targets/complexJsonInputTargets.enum'

export class ComplexJsonInputStylingTargets implements TargetsModel<ComplexJsonInputTargetsEnum> {
  @Css()
  @Description('Adds styles to the root div for the complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.root]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the label for the complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.label]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the tooltip for the complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.tooltip]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the tooltip popover menu for the complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.tooltipPopover]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the container that wraps the children in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.complexJsonInput]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the type selector for the complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.complexJsonInputTypeSelector]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the container wrapping the add + clear buttons in the complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.complexJsonInputAddClearWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the add button for the complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.addButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the clear button for the complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.clearButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the delete button for the complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.deleteButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the container that wraps the children in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.complexJsonInputChildrenWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the container that wraps each child in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.complexJsonInputChildItem]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the type selector options in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.complexJsonInputSelectOption]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the labels for options in the type selector in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.complexJsonInputSelectOptionLabel]: CssClassOrProps;

  @Css()
  @Description('Adds styles to the error messages for complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.errors]: CssClassOrProps
}
