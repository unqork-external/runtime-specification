import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

@TrimmedDescription(`
  This model represents the properties that are enabled by the "simple view" mode.
  During Simple View mode, minimal styling is applied, adornments and events still work,
  and the goal is to ensure that a fast and unstyled view may be used by other components
  within the Unqork suite.
  
  This may not last - it may be better to just create native components rather than secondary views
  due to complexity and single responsibility concerns.
`)
export class TextfieldSimpleViewModel {
  @TrimmedDescription(`
    When set to "true", the textfield should allow users input data.
    When set to "false", the textfield will render as an unstyled readonly Typography.
  `)
  inEditMode: boolean
}
