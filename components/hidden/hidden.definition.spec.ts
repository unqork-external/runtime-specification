import { HiddenComponentDefinition } from './hidden.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Hidden Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(HiddenComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
