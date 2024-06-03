import {
  CollectionOf,
  Default,
  Description,
  Enum,
  Example,
  Maximum,
  Minimum,
  Optional,
  Required,
  Schema,
} from '@tsed/schema'

import {
  ApiCallModalOptions,
  ApiCallSpinnerOptions,
  ApiInputs,
  ApiOutputArgs,
  ErrorsArgs,
  PostTriggerArgs,
  PreTriggerArgs,
} from './apiCall.type'
import { HTTPMethodType } from './method.type'
import { PreRequestTransform } from './preRequestTransform'
import { ServiceType } from './serviceType.type'
import { TrimmedDescription } from '../../../../decorators/schema/trimmedDescription.decorator'

export class ApiCallHeaders {
  @Optional()
  @Example('no-cache')
  value?: string

  @Optional()
  @Example('X-REQUEST-ID')
  label?: string
}

@Description(
  'API_CALL will perform a request per defined specifications and map the results to the relevant locations in the system.',
)
@Schema({
  if: {
    properties: { topLevelArray: { const: true } },
  },
  then: {
    dependentRequired: {
      topLevelArray: ['arrayKeyPromote'],
    },
  },
})
export class ApiCallOptions {
  targetKey?: string

  // TODO: Put in HTTP key?
  @Required()
  @Enum(HTTPMethodType)
  @Example('GET', HTTPMethodType.POST)
  @Description('method refers to the HTTP request method for the API call.')
  method: HTTPMethodType

  @Required()
  @Example('https://pokeapi.co/api/v2/pokemon-species')
  @Description('url refers to the URL endpoint for the API call.')
  url: string

  @Optional()
  headers?: Record<string, any>

  @Optional()
  queryParams?: string

  @Default(true)
  @TrimmedDescription(`
    If an output comes back empty, you can either have the data store as an empty value or choose not to store the data. 
    By setting this toggle to true, null or empty strings store as empty values. If set to OFF, the values don't record.
    
    https://docs.unqork.io/Content/A05-ModEditor-Data_Event/A05006A-Plug-In_Component.htm?Highlight=Assign%20Empty%20Values#:~:text=Assign%20Values%20if%20They%20Are%20Null%20or%20Empty%20String
    
    By default, this toggle is set to true.
  `)
  assignEmptyValues?: boolean = true

  @Default(false)
  @TrimmedDescription(`
    withCredentials refers to the inclusion of credentials on cross-site requests.
    When set to true, an application can make cross-site access-control requests using credentials, like cookies.
  `)
  withCredentials?: boolean = false

  // TODO: Put under HTTP/Configuration key?
  @Default(3)
  @Minimum(0)
  @Maximum(10)
  @TrimmedDescription(`
    maximumRetryCount refers to the maximum number of retries on a failed API call.
    The maximum number of retries is 10.
  `)
  maximumRetryCount?: number = 3

  @Optional()
  @Minimum(0)
  @Maximum(10000)
  @TrimmedDescription(`
    retryDelayInMS refers to the number of milliseconds to wait before trying the API call again after it failed.
    The maximum delay is 10,000 ms.
  `)
  retryDelayInMS?: number

  @Optional()
  @Minimum(0)
  @Maximum(120000)
  @TrimmedDescription(`
    timeoutInMS refers to the number of milliseconds that pass before the API call times out.
    The maximum timeout is 120,000 ms.
  `)
  timeoutInMS?: number

  // TODO: Put under Unqork Settings key?
  @Default(false)
  @TrimmedDescription(`
    assignAPIValues refers to how to handle/map responses from the API call.
    When set to true, API response values may be assigned to components directly.
  `)
  assignAPIValues?: boolean = false

  @Default(false)
  @TrimmedDescription(`
    assumeDataKeyInResponse refers to how to access data from the response of the API Call.
    When set to true, the 'data.' prefix can be removed from mapping fields.
  `)
  assumeDataKeyInResponse?: boolean = false

  @Default(false)
  @Description(`convertXmlResponseToJson should be enabled when an API is known to return XML response.`)
  convertXmlResponseToJson?: boolean = false

  @Default(true)
  @TrimmedDescription(`
    By default, all requests made with an API_CALL operation will assume the role provided by engineArgs.assumeRoleOverride.
    To disable this behaviour for a particular operation, set this boolean to false.
  `)
  assumeRole?: boolean = true

  @Default(false)
  @TrimmedDescription(`
    expectBinaryResponse should be enabled when you expect the API call to return a large file, 
    and/or want to store the response in its original file format.
    When set to true, the response doesn't convert to or store as base64.
  `)
  expectBinaryResponse?: boolean = false

  @Optional()
  @CollectionOf(ErrorsArgs)
  @Description('errorOutputs refers to the list of specified error handling components.')
  errorOutputs?: ErrorsArgs[]

  @Default(false)
  @TrimmedDescription(`
    flattenToSingleRecord refers to how the API call results will be stored.
    When set to true, the module flattens results into a single record value. 
    When set to OFF, the module leaves the unflattened results in multiple values.
  `)
  flattenToSingleRecord?: boolean = false

  @Default(false)
  @TrimmedDescription(`
    outputValuesOnly refers to how the output from the API call should be handled.
    When set to true, the API response is not logged and the outputs are appropriately mapped and handled. 
    When set to false, the entire API call response is logged in the DevTools Console before the output handling occurs.
  `)
  outputValuesOnly?: boolean = false

  @Optional()
  @CollectionOf(ApiInputs)
  @Description('inputs refers to the options that let you map data from components in your module into an API call.')
  inputs?: ApiInputs[]

  @Required()
  @CollectionOf(ApiOutputArgs)
  @Description(
    'outputs refers to options that let you map data from an API call response to other components in your module.',
  )
  outputs: ApiOutputArgs[]

  @Optional()
  @CollectionOf(PostTriggerArgs)
  @Description('postTriggerOutputs refers to the list of components to trigger after the API call is completed.')
  postTriggerOutputs?: PostTriggerArgs[]

  @Optional()
  @CollectionOf(PreTriggerArgs)
  @Description('preTriggerOutputs is the list of components to trigger concurrently when the API call is made.')
  preTriggerOutputs?: PreTriggerArgs[]

  @Optional()
  @Description(
    'service refers to a predefined Service that when selected, populates most of the API call configuration.',
  )
  service?: string

  @Optional()
  @Enum(ServiceType)
  @Default(ServiceType.UNQORK)
  @TrimmedDescription(`
    serviceType can be set to either 'Unqork' or 'External.
    Unqork service type has a number of preconfigured, internal API services. These API calls help you create files, convert files, and access or edit submission data.
    External service type can make an API call to an external source. You must configure these services in Unqork's Services Administration.
  `)
  serviceType?: ServiceType = ServiceType.UNQORK

  @Default(false)
  @TrimmedDescription(`
    topLevelArray should be set to true when you want to add a top level array/object to the request body. 
    When topLevelArray is true, the string value of 'arrayKeyPromote' will be promoted to the top level.
    https://docs.unqork.io/Content/A05-ModEditor-Data_Event/A05006A-Plug-In_Component.htm#:~:text=multipart%20API%C2%A0call.-,Promote%20Object/Array%20to%20Top%20Level,-%3A%20Use%20this%20setting
  `)
  topLevelArray?: boolean = false

  @Optional()
  @Description(`arrayKeyPromote refers to the value that should be used when 'topLevelArray' is set to true.`)
  arrayKeyPromote?: string

  // TODO: Put under Unqork Settings / Validation key?
  @Optional()
  @TrimmedDescription(`
    ensureJSONPathExistsInResponse lets you set a required property path return value. 
    If the path isn't present in the response body, the call results in an error.
  `)
  ensureJSONPathExistsInResponse?: string

  @Optional()
  @Description('modalOptions can be set to specify modal behaviors pertaining to the API Call.')
  modalOptions?: ApiCallModalOptions

  @Optional()
  @Description('spinnerOptions can be set to specify spinner/cursor behaviors relating to the API Call.')
  spinnerOptions?: ApiCallSpinnerOptions

  @Default(false)
  @Description('isMultiPartRequest, when set to true, combines one or more sets of data into a single body.')
  isMultiPartRequest?: boolean = false

  @Optional()
  @Description(
    `multipartSubType is used to specify whether the parts of a multipart API request are related, mixed, or otherwise correlated.`,
  )
  multipartSubType?: string

  @Default(false)
  @Description('When set to true, execution of the API Call will be blocked.')
  blockExecution?: boolean = false

  @Default(false)
  @TrimmedDescription(`
    If the API_CALL fails when attempting to make the request, then this will cause the API_CALL
    operation to throw an ApiCallResponseError, ApiCallRequestError, or ApiCallPreRequestError. The
    ApiCallResponseError contains the statusCode and data from the error response. When true, this
    will also make the API_CALL blockExecution, because errors can only be caught if we await execution.
  `)
  throwIfErrorStatus?: boolean = false

  // TODO: Is this the same as topLevelArray
  promoteToTopLevel?: boolean

  @Optional()
  @Description(
    'The object that describes how we transform the data coming in - input by the user with formId and name.',
  )
  preRequestTransform?: PreRequestTransform
}
