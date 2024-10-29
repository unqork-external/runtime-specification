import { Description } from '@tsed/schema'

import { ComplexJsonInputStylingTargets } from './complexJsonInput.targets'
import { Examples } from '../../../../decorators'
import { StylingModel } from '../../../styling'
import { targetedStylingExample } from '../../../styling/targeted.styling.example'

@Description('An object containing styling for the component.')
@Examples(targetedStylingExample)
export class ComplexJsonInputStyling extends StylingModel<ComplexJsonInputStylingTargets> {
  targets: ComplexJsonInputStylingTargets
}
