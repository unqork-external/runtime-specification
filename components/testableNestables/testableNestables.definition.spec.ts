import { TestableNestablesComponentDefinition } from './testableNestables.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('TestableNestables Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TestableNestablesComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
