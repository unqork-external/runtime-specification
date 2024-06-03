import { Property } from '@tsed/schema'

import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class DateInputSimpleViewModel {
  @Property()
  @TrimmedDescription(`
    When set to "true", the component should allow users input data.
    When set to "false", the component will render as an unstyled readonly Typography.
  `)
  inEditMode: boolean
}
