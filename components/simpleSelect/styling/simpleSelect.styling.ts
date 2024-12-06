import { Property } from '@tsed/schema'

import { SimpleSelectStyleTargets } from './simpleSelectStyle.targets'
import { StylingModel } from '../../../styling'

export class SimpleSelectStyling extends StylingModel<SimpleSelectStyleTargets> {
  @Property()
  declare targets: SimpleSelectStyleTargets
}
