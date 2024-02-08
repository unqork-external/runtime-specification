import { Default, Description } from '@tsed/schema'

import { trimAll } from '../../../utilities'

export class Display {
  @Default(false)
  @Description(
    trimAll(`
      Setting it to \`true\` hides the component from the view, while \`false\` shows it.
      Regardless of this setting, the component is always visible in the Module Editor.
      A hidden component can still receive information from other components.
    `),
  )
  hidden?: boolean = false

  @Default(true)
  @Description(
    trimAll(`
      When \`false\`, it is not possible to interact with or edit the input field.
      Its appearance is modified (grayed-out by default) to show its state,
      the HTML 'disabled' attribute is added to the field, and when hovering over it, 
      the cursor also changes to alert of the disabled status.
      However, the component can still receive information from other components when it's not interactive.
    `),
  )
  interactive?: boolean = true

  @Default(false)
  @Description(
    trimAll(`
      Defines how the component will be displayed.
      When \`false\`, the component is displayed as an input field.
      When \`true\`, the component will not accept any input from the user, 
      and its value will be rendered inline as text and not as an input component. 
      If no value is present, the word 'None' is rendered.
      If a prefix or suffix is set for the component, they also appear as inline text.
    `),
  )
  readOnlyView?: boolean = false
}
