import { Description } from '@tsed/schema'

import { OpsBuilderStylingTargets } from './operationsBuilder.targets'
import { Examples } from '../../../../decorators'
import { StylingModel } from '../../../styling'
import { targetedStylingExample } from '../../../styling/targeted.styling.example'

@Description('An object containing styling for the component.')
@Examples(targetedStylingExample)
export class OpsBuilderStyling extends StylingModel<OpsBuilderStylingTargets> {
  declare targets: OpsBuilderStylingTargets
}
