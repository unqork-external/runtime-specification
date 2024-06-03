import { RichTextEditorComponentDefinition } from './richTextEditor.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Rich Text Editor Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(RichTextEditorComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
