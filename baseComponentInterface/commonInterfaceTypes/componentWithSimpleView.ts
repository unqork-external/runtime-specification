import { Description, Property } from '@tsed/schema'

import { trimAll } from '../../../utilities'
import { BaseComponentDefinition } from '../base.component.definition'

export class CommonSimpleViewModel {
  @Property()
  @Description(
    trimAll(`
    When set to "true", the component should allow users to input data.
    When set to "false", the component will render as an unstyled readonly Typography.
  `),
  )
  inEditMode: boolean
}
export interface ComponentWithSimpleView extends BaseComponentDefinition {
  simpleView?: CommonSimpleViewModel
}
