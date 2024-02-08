import { Property } from '@tsed/schema'

import { TextfieldStyleTargets } from './textfieldStyle.targets'

export class TextfieldStyling {
  @Property()
  targets: TextfieldStyleTargets
}
