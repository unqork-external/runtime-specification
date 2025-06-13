import { JsonSchemaEditorComponentDefinition } from './jsonSchemaEditor.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('JsonSchemaEditor Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(JsonSchemaEditorComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
