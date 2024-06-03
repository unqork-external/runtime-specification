import { Description } from '@tsed/schema'

import { Css } from '../../../../decorators/schema/css.decorator'
import { type CssClassOrProps } from '../../../styling/cssClassOrProps.type'
import { SearchSelectTargets } from '../targets/searchSelectTargets.enum'

export class SearchSelectStyleTargets {
  @Description("Adds styles to Search Select's ComponentWrapper.")
  @Css()
  [SearchSelectTargets.ROOT]: CssClassOrProps;

  @Description("Adds styles to Search Select's input field.")
  @Css()
  [SearchSelectTargets.INPUT]: CssClassOrProps;

  @Description("Adds styles to Search Select's label.")
  @Css()
  [SearchSelectTargets.LABEL]: CssClassOrProps;

  @Description("Adds styles to Search Select's read only text.")
  @Css()
  [SearchSelectTargets.READ_ONLY]: CssClassOrProps;

  @Description("Adds styles to Search Select's search input.")
  @Css()
  [SearchSelectTargets.SEARCH_INPUT]: CssClassOrProps;

  @Description("Adds styles to Search Select's custom popper.")
  @Css()
  [SearchSelectTargets.CUSTOM_POPPER]: CssClassOrProps;

  @Description("Adds styles to Search Select's selected value tag.")
  @Css()
  [SearchSelectTargets.TAG]: CssClassOrProps;

  @Description("Adds styles to Search Select's root of the Errors sub-component")
  @Css()
  [SearchSelectTargets.ERRORS_ROOT]: CssClassOrProps;

  @Description('Adds styles to Search Select UL HTML element in the Errors sub-component')
  @Css()
  [SearchSelectTargets.ERRORS_UNORDERED_LIST]: CssClassOrProps;

  @Description("Adds styles to Search Select's each LI HTML element in the Errors sub-component")
  @Css()
  [SearchSelectTargets.ERRORS_UNORDERED_LIST_ITEM]: CssClassOrProps;

  @Description("Adds styles to Search Select's each FieldError sub-component in Errors")
  @Css()
  [SearchSelectTargets.ERRORS_FIELD_ERROR]: CssClassOrProps
}
