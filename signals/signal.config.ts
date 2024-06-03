import { CollectionOf, Example, Optional, Required } from '@tsed/schema'

import { type EventType } from './eventTypes/eventType.enum'
import { TrimmedDescription } from '../../decorators/schema/trimmedDescription.decorator'
import { Operation } from '../operations/interface/operations.interface'

@TrimmedDescription(
  `A Signal is a data structure which allows Runtime Objects
  to respond to emitted events by performing operations in response to those events.`,
)
export class Signal {
  @Optional()
  @TrimmedDescription(`An optional object which contains additional data specific to the given Signal type`)
  @Example(`
    {
      "inputs": {
        "targetKey": "firstName",
        "propertyPath": "value",
        "required": true
      }
    }
  `)
  args?: Record<string, any>

  @Optional()
  criteria?: Record<string, any>

  @Required()
  @TrimmedDescription(`A unique ID for the Signal. The ID must be unique within a given object-target context.`)
  @Example('myValueWatcher')
  id: string

  @Required()
  @TrimmedDescription(`The Signal type defines how the Signal is processed and handled by the Runtime.`)
  @Example('onBlur', 'onWatch', 'onClick')
  type: EventType | string

  @Required()
  @CollectionOf(Operation)
  @TrimmedDescription('The operations to perform when the triggering event is emitted.')
  operations: Operation[]
}

/**
 * SignalTargets is a generic type that accepts an enum, Record<string,string>,
 * or string to provide the possible targets for a `signals` object. It uses the keys
 * of the passed in type to create the target keys for the signal arrays.
 */
export type SignalTargets<T extends string> = {
  [key in T]?: Signal[]
}

/**
 * SignalsWrapper is a generic class that is used in the conversion layer to
 * provide better typing for creation of the `signals` object. The type is passed
 * directly to the SignalTargets type.
 */
export class SignalsWrapper<T extends string> {
  signals: SignalTargets<T>
}
