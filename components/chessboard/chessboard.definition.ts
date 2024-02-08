import { Required, DiscriminatorValue, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../baseComponentInterface/base.component.definition'
import { Display } from '../../componentComposition/display/component.display'

@DiscriminatorValue('chessboard')
export class ChessboardComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'chessboard' = 'chessboard' as const

  @Property(Display)
  display: Display = new Display()
}
