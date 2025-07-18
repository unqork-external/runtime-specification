import { Description, DiscriminatorValue, Optional, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import type { HeaderFooterOverride } from '../../header-footer'
import { OperationTypes, OperationsAllowMode } from '../../operations'

export class EmbeddedData {
  @Optional()
  @Description('Data to embed')
  data?: any

  @Optional()
  @Description('Component key to watch and pull data from')
  targetKey?: string

  @Optional()
  @Description('Property of the targetKey component to pull data from')
  property?: string
}

export class EmbeddedOperationsOptions {
  @Optional()
  @Description('Mode to control how operations are allowed to run')
  mode?: OperationsAllowMode

  @Optional()
  @Description('List of operations to restrict/allow')
  operations?: OperationTypes[]
}

export class EmbeddedLogLevels {
  @Optional()
  @Description('Debug log level')
  debug?: boolean

  @Optional()
  @Description('Info log level')
  info?: boolean

  @Optional()
  @Description('Warn log level')
  warn?: boolean

  @Optional()
  @Description('Error log level')
  error?: boolean
}
export class EmbeddedLoggingOptions {
  @Optional()
  @Description('Log levels to capture. Defaults to the environment settings.')
  logLevels?: EmbeddedLogLevels

  @Optional()
  @Description('Write to the console log')
  writeToLog?: boolean

  @Optional()
  @Description('Capture and store the logs with the component')
  subscribe?: boolean
}

export class EmbeddedOptions {
  @Optional()
  @Description('Definition data for the module')
  module?: EmbeddedData

  @Optional()
  @Description('Submission data for the module')
  submission?: EmbeddedData

  @Optional()
  @Description('Style name to use in the embedded module for customer css urls')
  style?: string

  @Optional()
  @Description('CSS URLs to use in the embedded module')
  cssUrls?: string[]

  @Optional()
  @Description('Key used to identify the embedded instance and attach to the window/global')
  embeddingKey?: string

  @Optional()
  @Description('Controls what operations are available to the embedded module')
  operationsOptions?: EmbeddedOperationsOptions

  @Optional()
  @Description('Override the environment header/footer modules')
  headerFooterOverride?: HeaderFooterOverride

  @Optional()
  @Description('Event name to listen for in the embedded module. The payload contains an event to process.')
  embeddedEventName?: string

  @Optional()
  @Description('Logging options for the embedded module')
  logging?: EmbeddedLoggingOptions

  @Optional()
  @Description('Use the legacy DOM structure for the embedded module')
  useLegacyStructure?: boolean

  @Optional()
  @Description('Wait for styles to load before showing the embedded module')
  waitForStyles?: boolean
}

@DiscriminatorValue('embedded')
export class EmbeddedComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'embedded' = 'embedded' as const

  @Description('Options for the module to embed')
  options: EmbeddedOptions = new EmbeddedOptions()

  @Description('Captures the logs from the embedded module')
  @Optional()
  logs?: any[]
}
