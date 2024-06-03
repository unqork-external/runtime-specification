import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'

@TrimmedDescription(`
  This model represents the properties that are enabled by the "simple view" mode.
  During Simple View mode, minimal styling is applied, adornments and events still work,
  and the goal is to ensure that a fast and unstyled view may be used by other components
  within the Unqork suite.
  
  This may not last - it may be better to just create native components rather than secondary views
  due to complexity and single responsibility concerns.
`)
export class SingleCheckboxSimpleViewModel {
  @TrimmedDescription(`
    Edit mode for checkboxes works different from the other components. By default,
    their simple views are always in edit mode (interactivity is controlled by 'readOnlyView' 
    and/or 'interactive' flags). This flag is primarly a support for keyboard navigation,
    because it helps us to define whether the focus should be on the checkbox or its wrapper component
    When set to "true", the focus will start on the checkbox.
    When set to "false", the focus will start on the checkbox's wrapper.
  `)
  inEditMode: boolean
}
