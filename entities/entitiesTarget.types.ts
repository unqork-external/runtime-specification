import { Description, Example, Optional, Required, CollectionOf } from '@tsed/schema'

import { trimAll } from '../../utilities'

@Description(
  trimAll(`
  An Entity Target is a representation of a key that maps to an engine value and a property that maps to the Entity data.
`),
)
export class EntityTarget {
  @Required()
  @Example('firstName', 'grid', 'checkboxOptionA')
  @Description('The name/key of the target that maps to a engine value')
  keyName: string

  @Required()
  @Example('{{firstName.value}}', 'true', 'unknownValue')
  @Description('Either the explicit value for the entity or an interpolated path to resolve the entity value')
  value: string

  @Optional()
  @Example('[{keyName: "firstName", value: "{{firstName.value}}" }]', `[{keyName: "optionA", value: true" }]`)
  @Description(
    trimAll(`
    Targets are an optional collection of engine value references used get and set engine values. 
    An Entity target might optionally need to define exactly what values it cares about. 
    This is useful when dealing with nested data
  `),
  )
  @CollectionOf(EntityTarget)
  targets?: EntityTarget[]
}
