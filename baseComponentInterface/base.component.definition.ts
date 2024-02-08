import { Any, CollectionOf, Default, Description, DiscriminatorKey, Example, Property, Required } from '@tsed/schema'

import { trimAll } from '../../utilities'
import { ComponentEventHandlers, Watcher } from '../events'
import { InputRef } from '../inputs/inputRef'
import { RootObject } from '../rootObject'
import { StylingModel } from '../styling'
import { Validation } from '../validations/validation'

/**
 * This is the fundamental interface any component that wishes to leverage the runtime must follow.
 * It is the agreed upon contract between the runtime and anything that should be recognized as a component.
 */
export class BaseComponentDefinition extends RootObject {
  @Required()
  @Property()
  @Description(
    trimAll(`
      A user-defined key that is unique within a module.
      It doesn't have to be unique across different modules.
      Objects in the runtime use keys to target other components.
    `),
  )
  key: string

  /**
   *  TODO: Type should be supplanted with a { name: <Asset>, version: <x.x.x> } representation
   *    JIRA ticket => UQE-2452
   *
   */
  @Required()
  @Description(`Describes which kind of component the creator intends to build.`)
  @DiscriminatorKey()
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

  /**
   * e.g.
   *  {
   *    eventHandlers: {
   *      BLUR: {
   *        operations: [
   *          DO SOMETHING COOL,
   *          ALSO, ONE MORE THING
   *        ]
   *      }
   *    }
   *  }
   *
   */
  @Property()
  @Description(`An object that represents a Runtime Event and the associated behavior.`)
  eventHandlers?: ComponentEventHandlers

  /**
   * TODO: Watchers are events that execute custom logic defined by the user.
   *  This should be represented in the `events` key, with a specification that unifies this a little better.
   *  JIRA ticket => UQE-2453
   *
   */
  @CollectionOf(Watcher)
  watchers?: Watcher[]

  /**
   * Components may define other targets that they refer to.
   *
   * This becomes a link for operation execution within the Runtime.
   *
   * TODO: Rethink Inputs. May be supplanted entirely by Runtime Variables.
   *  JIRA ticket => UQE-1624
   *
   */
  @CollectionOf(InputRef)
  inputs?: InputRef[]

  @Property()
  @Description('Holds information for targeted styling of the component.')
  styling?: StylingModel<any>

  @Property()
  @Description(`Holds the validation rules and the most current validation results for the component`)
  validation?: Validation

  @Any()
  @Property()
  @Description(`Current value of the component`)
  value?: unknown
}
