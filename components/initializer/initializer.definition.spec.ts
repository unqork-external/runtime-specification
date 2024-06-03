import { InitializerComponentDefinition } from './initializer.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Initializer Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(InitializerComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
