import { Default } from '@tsed/schema'

import { Nestable, NestableType } from '../../../nestables'

export class LeftAdornmentNestable extends Nestable {
  @Default('left')
  propertyName: string = 'left'

  @Default(NestableType.ARRAY)
  type: NestableType = NestableType.ARRAY

  @Default('adornments.left')
  children: string = 'adornments.left'
}

export class RightAdornmentNestable extends Nestable {
  @Default('right')
  propertyName: string = 'right'

  @Default(NestableType.ARRAY)
  type: NestableType = NestableType.ARRAY

  @Default('adornments.right')
  children: string = 'adornments.right'
}
