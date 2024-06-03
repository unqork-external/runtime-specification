import { ProtectedFieldComponentDefinition } from './protectedField.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Protected Field Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ProtectedFieldComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
