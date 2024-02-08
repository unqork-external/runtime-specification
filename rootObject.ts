import { CollectionOf, Default, Description, Example, Property, Required } from '@tsed/schema'

import { ComponentEventHandlers } from './events/component.eventHandlers'
import { Watcher } from './events/watchers'
import { InputRef } from './inputs/inputRef'
import { trimAll } from '../utilities'

/**
 * All Specification Objects come from the Root Object.
 *
 * Instead of continuing to refer things as coupled to components, we should be able to describe things as "Objects".
 *
 *  Useful interface for Language alignment
 */
export class RootObject {
  @Required()
  @Description(
    trimAll(`
      A user-defined key that is unique within a module.
      It doesn't have to be unique across different modules.
      Objects in the runtime use keys to target other components.
    `),
  )
  @Example(`I am the key`, `bestKeyEver`)
  key: string

  @Required()
  type: string

  @Default(true)
  @Description(
    trimAll(`
    Defines whether or not the object will respond to events or fire operations.
    When \`true\`, the object will perform and behave as defined in its spec.
    When \`false\`, the object will no longer be responsive to the system.
  `),
  )
  executable?: boolean = true

  @Property(ComponentEventHandlers)
  eventHandlers?: ComponentEventHandlers

  /**
   * TODO: Watchers are events that execute custom logic defined by the user.
   *  This should be represented in the `events` key, with a specification that unifies this a little better.
   *
   * @type {Watcher[]}
   */
  @CollectionOf(Watcher)
  watchers?: Watcher[]

  /**
   * Components may define other targets that they refer to.
   *
   * This becomes a link for operation execution within the Runtime.
   *
   * TODO: Rethink Inputs. May be supplanted entirely by Runtime Variables.
   *
   * @type {InputRef[]}
   */
  @CollectionOf(() => InputRef)
  inputs?: InputRef[]
}
