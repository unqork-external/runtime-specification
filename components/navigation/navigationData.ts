import { Default, Description } from '@tsed/schema'

export class NavigationData {
  @Description('Text displayed on tabs/bubbles per page')
  title?: string

  @Description('Heading that appears on each navigation page')
  heading?: string

  @Description('Property id/value to associate with each navigation panel')
  value?: string

  @Default(false)
  @Description('Hides the previous navigation button on current page (default does not show on first page)')
  hidePrevious: boolean = false

  @Default(false)
  @Description('Hides the next navigation button on current page (default does not show on last page)')
  hideNext: boolean = false

  @Default(false)
  @Description('Hides the submit button on current page (default shows up on last page)')
  hideSubmit: boolean = false

  @Default(false)
  @Description('Hides the Save draft / exit button on current page (default shows up on every page)')
  hideDraft: boolean = false

  @Description('Property id of the component to trigger when user navigates away from current page')
  postTrigger?: string

  @Description('Property id of the component to trigger after validation is performed')
  postValidationTrigger?: string

  @Description('Reference for panel ID in module')
  panel?: string

  @Description(
    `
    Adds a title for a group of panels which will only show with the vertical display (similar to a table of contents)
  `.trim(),
  )
  groupTitle: string

  @Description(
    `
    Property id of the component to trigger when user navigates to the current page
    (note - post trigger from previous page will fire first)
  `.trim(),
  )
  preTrigger?: string

  @Default(false)
  @Description(
    `
    Creates a new submission / save to an existing submission after end user navigates away from this panel's page
  `.trim(),
  )
  saveOnNavigation: boolean = false

  @Description('Property id of the component to trigger after save is performed')
  postSaveTrigger?: string
}
