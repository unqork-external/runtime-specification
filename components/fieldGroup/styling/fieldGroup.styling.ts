import { Property } from '@tsed/schema'

import { FieldGroupStylingTargets } from './fieldGroup.targets'
import { Examples } from '../../../../decorators/schema/examples.decorator'
import { StylingModel } from '../../../styling/styling.model'
import { targetedStylingExample } from '../../../styling/targeted.styling.example'

@Examples(targetedStylingExample)
export class FieldGroupStyling implements StylingModel<FieldGroupStylingTargets> {
  @Property()
  targets: FieldGroupStylingTargets
}
