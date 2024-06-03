import { IteratorComponentDefinition } from './iterator.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Iterator Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(IteratorComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
