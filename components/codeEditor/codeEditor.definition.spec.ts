import { CodeEditorComponentDefinition } from './codeEditor.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Code Editor Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(CodeEditorComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
