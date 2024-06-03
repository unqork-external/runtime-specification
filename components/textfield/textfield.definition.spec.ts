import { TextFieldComponentDefinition } from './textfield.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Textfield Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TextFieldComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
