import { SimpleSelectComponentDefinition } from './simpleSelect.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('SimpleSelect Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SimpleSelectComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
