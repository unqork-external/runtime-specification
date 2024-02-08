import { Default, Description } from '@tsed/schema'

import { Nestable, NestableType } from '../../nestables'

export class SelectedOptionsNestable extends Nestable {
  @Default('optionKeys')
  @Description('Nestable property name.')
  propertyName: string = 'selected'

  @Default(NestableType.ARRAY)
  @Description('Nestable type.')
  type: NestableType = NestableType.ARRAY

  @Default('options')
  @Description('Nestable children.')
  children: string = 'selectedOptions'
}
