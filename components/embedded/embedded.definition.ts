import { Description, DiscriminatorValue, Optional, Property, Required } from '@tsed/schema'

import { BaseComponentDefinition } from '../../base-component-interface/base.component.definition'
import { Display } from '../../component-composition/display/component.display'

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

export class EmbeddedOptions {
  @Optional()
  @Description('Definition data for the module')
  module?: EmbeddedData

  @Optional()
  @Description('Submission data for the module')
  submission?: EmbeddedData

  @Optional()
  @Description('Style name to use in the embedded module')
  style?: string

  @Optional()
  @Description('Key used to identify the embedded instance and attach to the window/global')
  embeddingKey?: string
}

@DiscriminatorValue('embedded')
export class EmbeddedComponentDefinition extends BaseComponentDefinition {
  @Required()
  type: 'embedded' = 'embedded' as const

  @Description('Options for the module to embed')
  options: EmbeddedOptions = new EmbeddedOptions()
}
