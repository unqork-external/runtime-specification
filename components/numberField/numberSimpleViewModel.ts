import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'

export class NumberSimpleViewModel {
  @TrimmedDescription(`
    When set to "true", the number should allow users input data.
    When set to "false", the number will render as an unstyled readonly Typography.
  `)
  inEditMode: boolean
}
