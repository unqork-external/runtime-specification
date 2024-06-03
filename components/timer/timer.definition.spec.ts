import { TimerComponentDefinition } from './timer.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Timer Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TimerComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
