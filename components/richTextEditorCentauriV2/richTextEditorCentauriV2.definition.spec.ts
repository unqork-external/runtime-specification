import { RichTextEditorCentauriV2ComponentDefinition } from './richTextEditorCentauriV2.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Rich Text Editor CentauriV2 Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(RichTextEditorCentauriV2ComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
