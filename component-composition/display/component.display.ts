import { Default, Optional } from '@tsed/schema'

import { TrimmedDescription } from '../../../decorators/schema/trimmedDescription.decorator'

@TrimmedDescription(`Basic UI settings related to how a component may be displayed and interacted with.
  'Hidden' corresponds to visibility.
  'Interactive' corresponds to the end-user's ability to interact with input components.
  'Read Only View' corresponds to the component being rendered with an input element or as text. 
`)
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
  readOnlyView?: boolean = false
}
