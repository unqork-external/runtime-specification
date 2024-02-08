import { Description, Property } from '@tsed/schema'

import { trimAll } from '../../../utilities'

export class NumberSimpleViewModel {
  @Property()
  @Description(
    trimAll(`
    When set to "true", the number should allow users input data.
    When set to "false", the number will render as an unstyled readonly Typography.
  `),
  )
  inEditMode: boolean
}
