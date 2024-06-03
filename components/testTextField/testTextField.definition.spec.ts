import { TestTextFieldComponentDefinition } from './testTextField.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('TestTextField Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(TestTextFieldComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
