import { Default, Description, Optional } from '@tsed/schema'

import { trimAll } from '../../../utilities'

@Description('Controls whether SimpleView is rendered as an input or Typography')
export class DateInputSimpleViewModel {
  @Optional()
  @Default(false)
  @Description(
    trimAll(`
      When set to "true", the component should allow users input data.
      When set to "false", the component will render as an unstyled readonly Typography component.
  `),
  )
  inEditMode: boolean = false
}
