import { Description, Property } from '@tsed/schema'

import { trimAll } from '../../../../utilities'

export class DateInputSimpleViewModel {
  @Property()
  @Description(
    trimAll(`
    When set to "true", the component should allow users input data.
    When set to "false", the component will render as an unstyled readonly Typography.
  `),
  )
  inEditMode: boolean
}
