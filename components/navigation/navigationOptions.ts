import { Default, Description, Property } from '@tsed/schema'

class NavButtonText {
  @Description('Text for the confirmation button')
  confirmationButtonText?: string

  @Description('Text for the previous button')
  previousButtonText?: string

  @Description('Text for the next button')
  nextButtonText?: string

  @Description('Text for the save draft button')
  saveDraftButtonText?: string

  @Description('Text for the submit button')
  submitButtonText?: string
}

class SuccessMessage {
  @Description('Text to show for the success message')
  text?: string

  @Default(false)
  @Description('Determines if the success message should be seen')
  hidden: boolean = false
}

class NavMessages {
  @Property(SuccessMessage)
  @Description('Properties for rendering the success popup')
  successMessage: SuccessMessage = new SuccessMessage()

  @Description('Text specifically for the save and exit message')
  saveAndExitMessage?: string
}

class NavRedirectURLs {
  @Description('URL to redirect to after successful submission')
  submitButtonUrl?: string

  @Description('URL to redirect to after successful save draft')
  saveDraftButtonUrl?: string
}

class NavErrorSettings {
  @Default(false)
  @Description('Hides the error message on navigation when TRUE')
  hidden: boolean = false

  @Description('Text for navigation error message')
  text?: string

  @Description('Title for navigation error message')
  title?: string
}

class NavValidationSettings {
  @Default(false)
  @Description(
    `Includes the "previous" button click when performing any validation.
    It does NOT validate on it's own when it is the only validation setting that is TRUE.
  `.trim(),
  )
  includePrevInValidation: boolean = false

  @Default(false)
  @Description('Validates a page when a user tries to clicks the "next" or "submit" buttons')
  validateOnNextOrSubmit: boolean = false

  @Default(false)
  @Description('Validates all module fields on navigation, even the ones not on the current page')
  validateAllFields: boolean = false

  @Default(false)
  @Description('Allows users to navigate between pages with errors, but they will not be able to submit with errors')
  allowNavigationWithErrors: boolean = false

  @Default(false)
  @Description('Validate when user opens a submission')
  validateOnOpeningSubmission: boolean = false
}

class NavScrollPosition {
  @Default(false)
  @Description('Determines if the page should scroll to the top or stay put on navigation')
  scrollToTop: boolean = false

  @Description('When scrolling to top, allows you to set an offset')
  scrollTopOffset?: number
}

export class NavigationOptions {
  @Description('Adds in a delay (milliseconds) that will pass before the module loads this component')
  loadDebounce?: number

  @Property(NavButtonText)
  @Description('Button text for all the navigation buttons')
  navButtonTextGroup: NavButtonText = new NavButtonText()

  @Property(NavMessages)
  @Description('Popup messages for various actions')
  navMessages: NavMessages = new NavMessages()

  @Property(NavRedirectURLs)
  @Description('URLs to redirect to after particular actions')
  navRedirectURLs: NavRedirectURLs = new NavRedirectURLs()

  @Property(NavErrorSettings)
  @Description('Navigation error settings')
  navErrorSettings: NavErrorSettings = new NavErrorSettings()

  @Property(NavValidationSettings)
  @Description('Navigation validation settings')
  navValidationSettings: NavValidationSettings = new NavValidationSettings()

  @Property(NavScrollPosition)
  @Description('Navigation scroll position settings')
  navScrollPosition: NavScrollPosition = new NavScrollPosition()

  @Default(false)
  @Description('Prevents users from clicking the bubbles to navigate, can only go previous and next')
  preventNavigationClick: boolean = false

  @Default(false)
  @Description(
    `
    Determines if a save is performed on EVERY navigation (configurable on a per-panel basis in NavigationData
  `.trim(),
  )
  saveOnEveryNavigation: boolean = false

  @Description('Uses data from reference key to fill the Navigation’s panel table')
  referenceKey?: string

  @Default(false)
  @Description('Determines if navigation should stagger load components for faster rendering')
  staggerLoad: boolean = false
}
