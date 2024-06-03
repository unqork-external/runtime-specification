import { Required, DiscriminatorValue, Property } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'

@DiscriminatorValue('chessboard')
export class ChessboardComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'chessboard' = 'chessboard' as const

  @Property(Display)
  display: Display = new Display()
}
