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
  [ComplexJsonInputTargetsEnum.errors]: CssClassOrProps;

  @Css()
  @Description('Adds styles to array item menu wrapper in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.arrayItemMenuWrapper]: CssClassOrProps;

  @Css()
  @Description('Adds styles to array item menu button in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.arrayItemMenuButton]: CssClassOrProps;

  @Css()
  @Description('Adds styles to array item menu in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.arrayItemMenu]: CssClassOrProps;

  @Css()
  @Description('Adds styles to array item menu option move up in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.moveItemUp]: CssClassOrProps;

  @Css()
  @Description('Adds styles to array item menu option move down in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.moveItemDown]: CssClassOrProps;

  @Css()
  @Description('Adds styles to move up icon in array item menu in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.moveItemUpIcon]: CssClassOrProps;

  @Css()
  @Description('Adds styles to move down icon in array item menu in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.moveItemDownIcon]: CssClassOrProps;

  @Css()
  @Description('Adds styles to delete icon in array item menu in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.deleteIcon]: CssClassOrProps;

  @Css()
  @Description('Adds styles to move up item label in array item menu in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.moveItemUpLabel]: CssClassOrProps;

  @Css()
  @Description('Adds styles to move down item label in array item menu in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.moveItemDownLabel]: CssClassOrProps;

  @Css()
  @Description('Adds styles to delete item label in array item menu in complexJsonInput component.')
  [ComplexJsonInputTargetsEnum.deleteLabel]: CssClassOrProps
}
