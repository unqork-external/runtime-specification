import { FieldGroupComponentDefinition } from './fieldGroup.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Field Group Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(FieldGroupComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
