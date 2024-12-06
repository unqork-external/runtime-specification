import { Description, Property } from '@tsed/schema'

import { SearchSelectStyleTargets } from './searchSelectStyle.targets'
import { StylingModel } from '../../../styling'

export class SearchSelectStyling extends StylingModel<SearchSelectStyleTargets> {
  @Description("Search Select's subcomponents that can accept additional styles.")
  declare targets: SearchSelectStyleTargets
}
