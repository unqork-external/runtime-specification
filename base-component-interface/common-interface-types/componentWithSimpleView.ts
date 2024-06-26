import { Property } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'
import { BaseComponentDefinition } from '../base.component.definition'

export class CommonSimpleViewModel {
  @Property()
  @TrimmedDescription(`
    When set to "true", the component should allow users to input data.
    When set to "false", the component will render as an unstyled readonly Typography.
  `)
  inEditMode: boolean
}
export interface ComponentWithSimpleView extends BaseComponentDefinition {
  simpleView?: CommonSimpleViewModel
}
