import { Default, Description, Example, Optional, Required } from '@tsed/schema'

export class OutputModifiers {
  @Default(true)
  @Description('shouldOverwrite will overwrite a preexisting value in the mapped output field when set to true.')
  shouldOverwrite?: boolean = true

  @Default(false)
  @Description('shouldValidate will ensure validation occurs based on the output fields settings when set to true.')
  shouldValidate?: boolean = false

  @Default(false)
  @Description(
    'shouldDisable will map the response to the appropriate output and then disable that field when set to true.',
  )
  shouldDisable?: boolean = false
}

export class ApiOutputArgs {
  @Required()
  @Example('hidden')
  @Description('targetKey refers to the output target for the API call.')
  targetKey: string

  @Example('name', 'data.group[0].description')
  @Description('responseJSONPath is the path to the data that is to be extracted from the API response.')
  responseJSONPath?: string

  @Optional()
  @Description('Use JSONPath query syntax instead of lodash `get`.')
  useJSONPath?: boolean = false

  @Optional()
  @Description('Output Modifiers offer different options for alternative/non-default handling of API responses.')
  modifiers?: OutputModifiers

  @Default(false)
  @Description(
    'seekValuesFromHeader looks for the output value in the API response header instead of its body when true.',
  )
  seekValuesFromHeader?: boolean = false

  @Optional()
  @Default('value')
  @Description('property refers to the property to be set on the targeted output.')
  property?: string = 'value'
}

export class ErrorsArgs {
  @Required()
  @Example('errorModal')
  @Description('targetKey refers to the component that is meant to be fired when the API call results in an error.')
  targetKey: string
}

export class PostTriggerArgs {
  @Required()
  @Example('apiCallFollowUp')
  @Description('targetKey refers to what is meant to be triggered after the API call is executed.')
  targetKey: string
}

export class PreTriggerArgs {
  @Required()
  @Example('preRequestAction')
  @Description('targetKey refers to what is meant to be triggered before the API call is executed.')
  targetKey: string
}

export class ApiInputs {
  @Required()
  @Example('textfield99', 'SGVsbG8gV29ybGQh')
  @Description('targetKey refers to the targeted input for the API call.')
  targetKey: string // can be component or simple value e.g. base64 string

  @Optional()
  @Example("value[0]['url']", 'data.something.other')
  @Description('targetKey refers to the targeted input for the API call.')
  propertyPath?: string // can be component or simple value e.g. base64 string

  @Optional()
  @Example('A')
  @Description('alias is the optional alternate name that can be used to refer to the targeted input.')
  alias?: string

  @Default(false)
  @Description('required, when true, ensures the targeted input has a value before moving ahead or saving the module.')
  required?: boolean = false

  @Default(false)
  @Description(`exclude, when true, won't pass the input field as a part of the API calls body.`)
  exclude?: boolean = false

  @Default(false)
  @Description(
    'appearInHeader will pass the input as a part of the API request header instead of body when set to true.',
  )
  appearInHeader?: boolean = false

  @Default(false)
  @Description('base64, when set to true, prepares the system to receive a base64 file from the API response.')
  base64?: boolean = false

  @Default(false)
  @Description('optional, when true, will not pass the input to the API request body if it is empty or null.')
  optional?: boolean = false
}

export class ApiCallModalOptions {
  @Default(false)
  @Description(
    'showModalWhileRunning, when true, will create a modal that informs the end-user that the data is processing.',
  )
  showModalWhileRunning?: boolean = false

  @Optional()
  @Example('Please wait while your data is being processed...')
  @Description('message refers to the message end-users see in the modal while the data is processing.')
  message?: string

  @Optional()
  @Example('Data Processing Successfully Completed')
  @Description('titleOnCompletion is the title end-users see on the modal after the data processes successfully.')
  titleOnCompletion?: string

  @Optional()
  @Example('Uh oh! Error Loading Data')
  @Description('titleOnError is the title end-users see on the modal if the data encounters an error while loading.')
  titleOnError?: string

  @Optional()
  @Example('Processing Your Request')
  @Description('titleWhileProcessing is the title end-users see on the modal while the data is processing.')
  titleWhileProcessing?: string
}

export class ApiCallSpinnerOptions {
  @Default(false)
  @Description('showCursorSpinner, when true, turns the end-users cursor into a spinner while data processes.')
  showCursorSpinner?: boolean = false

  @Default(false)
  @Description('showPageSpinner, when set to true, has the page display a spinning icon while data processes.')
  showPageSpinner?: boolean = false
}

export class ContextInfo {
  @Optional()
  @Example('textfield')
  @Description('componentKey refers to the key of the component needed for context.')
  componentKey?: string

  @Optional()
  @Example('61bbaa60a09767a9404079dc')
  @Description('formId refers to the id of the module needed for context.')
  formId?: string

  @Optional()
  @Example('Fancy Application Form')
  @Description('formTitle refers to the title of the module needed for context.')
  formTitle?: string
}
