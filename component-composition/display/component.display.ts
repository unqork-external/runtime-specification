import { Default, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'

const displayDescription = `Basic UI settings related to how a component may be displayed and interacted with.
  'Hidden' corresponds to visibility.
  'Interactive' corresponds to the end-user's ability to interact with input components.
  'Display as Text' corresponds to the component being rendered with an input element or as text.`

@TrimmedDescription(displayDescription)
export class Display {
  @Optional()
  @Default(false)
  @TrimmedDescription(`
    Setting it to \`true\` hides the component from the view, while \`false\` shows it.
    Regardless of this setting, the component is always visible in the Module Editor.
    A hidden component can still receive information from other components.
  `)
  hidden?: boolean = false

  @Optional()
  @Default(true)
  @TrimmedDescription(`
    When \`false\`, it is not possible to interact with or edit the input field.
    Its appearance is modified (grayed-out by default) to show its state,
    the HTML 'disabled' attribute is added to the field, and when hovering over it,
    the cursor also changes to alert of the disabled status.
    However, the component can still receive information from other components when it's not interactive.
  `)
  interactive?: boolean = true

  @Optional()
  @Default(false)
  @TrimmedDescription(`
    Defines how the component will be displayed.
    When \`false\`, the component is displayed as an input field.
    When \`true\`, the component will not accept any input from the user,
    and its value will be rendered inline as text and not as an input component.
    If no value is present, the word 'None' is rendered.
    If a prefix or suffix is set for the component, they also appear as inline text.
  `)
  // readOnlyView now corresponds to the visual label 'Display as Text'.
  // The label was changed for accessibility purposes but the underlying property name remains the same.
  readOnlyView?: boolean = false
}

@TrimmedDescription(
  `
  InputDisplay is an extension of Display.
  It applies additional properties to components that use the HTML <input> tag under the hood.
  'HTML Read Only' corresponds to applying the readonly property to the component's <input>.

  Display Description: 
` + displayDescription,
)
export class InputDisplay extends Display {
  @Optional()
  @Default(false)
  @TrimmedDescription(`
   When htmlReadOnly = true, it will make the field non-editable and will apply the readonly property to the component's <input>.
   This property is distinct from readOnlyView (aka 'Display as Text').
   htmlReadOnly is useful for accessibility (a11y) so that we can support setting the <input> field to readonly.
  `)
  htmlReadOnly?: boolean = false
}
