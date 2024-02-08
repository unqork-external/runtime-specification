import { Default, Description } from '@tsed/schema'

export class WorkflowButtonSettings {
  @Default(false)
  @Description('Controls if all navigation buttons will be hidden in the component.')
  hideButtons: boolean = false

  @Default(false)
  @Description('Controls if Next button will appear.')
  hideNextButton: boolean = false

  @Default('Next')
  @Description('Text to display for the button that will advance the user in the workflow.')
  nextButtonText: string = 'Next'

  @Default(false)
  @Description('Controls if Previous button will appear.')
  hidePreviousButton: boolean = false

  @Default('Previous')
  @Description('Text to display for the button that will move the user back in the workflow.')
  previousButtonText: string = 'Previous'

  @Default(false)
  @Description('Controls if Save and Exit button will appear.')
  hideSaveAndExitButton: boolean = false

  @Default('Save and Exit')
  @Description('Text to display for the button that will save the current submission and exit the workflow.')
  saveAndExitButtonText: string = 'Save and Exit'
}
