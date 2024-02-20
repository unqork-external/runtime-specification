import { Any, CollectionOf, Description, Example, Required } from '@tsed/schema'

import { trimAll } from '../../../../utilities'
import { Operation } from '../../interface/operations.interface'

export class Condition {
  @Required()
  @Description('The condition operation to run')
  operation: Operation

  @Required()
  @Example('isValid')
  @Description('resultProperty refers to the property to expect the result from.')
  resultProperty: string

  @Any()
  @Required()
  @Example(true)
  @Description('resultValue refers to the expected value.')
  resultValue: unknown
}

export class IfOperationOptions {
  @CollectionOf(Condition)
  @Description(
    trimAll(`
    The set of conditions to fire or evaluate.
    This could be represented as something as simple as firstName.value == "john" or
    an operation like VALIDATE.
  `),
  )
  conditions: Condition[]

  @CollectionOf(Operation)
  @Description(
    trimAll(`
    Optionally set a bunch of operations to fire when if the conditions return as successful.
    This is not intended to always be used - this is a convenience field in case it reads better for the user
    Operations continue firing if the conditions are true anyway. if you put all happy path execution in a \`whenTrue\`
    you risk causing a Pyramid of Doom antipattern for logical representation.
  `),
  )
  whenTrue?: Operation[]

  @CollectionOf(Operation)
  @Description(
    trimAll(`
    Optionally set a bunch of operations to fire when if the conditions return as unsuccessful.
    
    If unsuccessful, we'll run the false conditions, and continue down the operation chain.
  `),
  )
  whenFalse?: Operation[]

  @CollectionOf(Operation)
  @Description(
    trimAll(`
    Optionally set a bunch of operations to fire when if the conditions return as a failure.
    
    If the conditions fail and error, we'll run the fail operations, and terminate the operation chain.
  `),
  )
  onFail?: Operation[]
}
