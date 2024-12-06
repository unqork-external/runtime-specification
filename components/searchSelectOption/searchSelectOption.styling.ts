import { Description } from '@tsed/schema'

import { SearchSelectOptionTargets } from './searchSelectOptionTargets.enum'
import { Css } from '../../../decorators/schema/css.decorator'
import { type CssClassOrProps, StylingModel } from '../../styling'
import { TargetsModel } from '../../viewTargets/targets.model'

class SearchSelectOptionStyleTargets implements TargetsModel<SearchSelectOptionTargets> {
  @Description('Adds styles to Search Select Option root element.')
  @Css()
  [SearchSelectOptionTargets.root]: CssClassOrProps;

  @Description('Adds styles to Search Select Option field.')
  @Css()
  [SearchSelectOptionTargets.option]: CssClassOrProps
}

export class SearchSelectOptionStyling extends StylingModel<SearchSelectOptionStyleTargets> {
  @Description("Search Select Option's subcomponents that can accept additional styles.")
  declare targets: SearchSelectOptionStyleTargets
}
