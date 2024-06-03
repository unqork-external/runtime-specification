import { CollectionOf, Default, Description, Optional, Required } from '@tsed/schema'

import { keyExamples } from './rootObject.examples'
import { Examples } from '../../decorators/schema/examples.decorator'
import { TrimmedDescription } from '../../decorators/schema/trimmedDescription.decorator'
import { InputRef } from '../inputs/inputRef'
import { PackageModel } from '../packaging/package.model'
import type { SignalTargets } from '../signals/signal.config'
import { signalExamples } from '../signals/signal.examples'

/**
 * All Specification Objects come from the Root Object.
 *
 * Instead of continuing to refer things as coupled to components, we should be able to describe things as "Objects".
 *
 *  Useful interface for Language alignment
 */
@Description('Root Object is the base object from which all other Specification objects inherit properties.')
export class RootObject {
  @Required()
  @TrimmedDescription(`
    'key' is the user-defined, unique identifier for an object within a module.
    It doesn't have to be unique across different modules.
    Objects within the runtime use keys to target other objects.
  `)
  @Examples(keyExamples)
  key: string

  @Required()
  type: string

  @Optional()
  package?: PackageModel

  @Default(true)
  @TrimmedDescription(`
    Defines whether or not the object will respond to events or fire operations.
    When \`true\`, the object will perform and behave as defined in its spec.
    When \`false\`, the object will no longer be responsive to the system.
  `)
  executable?: boolean = true

  @Optional()
  @TrimmedDescription(`
    An object which contains all of the signals for the component.
    The signals object can have any number of target keys as defined in the component definition
    which each contain an array of Signals.
  `)
  @Examples(signalExamples)
  signals?: SignalTargets<any>

  // Temporary for Marsh compatibility
  eventHandlers?: any
  watchers?: any

  /**
   * SOON TO BE DEPRECATED
   * As Variables are introduced, Inputs will be phased out
   *
   * @type {InputRef[]}
   */
  @CollectionOf(() => InputRef)
  inputs?: InputRef[]
}
