import { MultiSelectComponentDefinition } from './multiSelect.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Multi-Select Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MultiSelectComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
