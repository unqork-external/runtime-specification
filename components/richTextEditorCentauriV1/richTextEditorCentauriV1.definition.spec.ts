import { RichTextEditorCentauriV1ComponentDefinition } from './richTextEditorCentauriV1.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Rich Text Editor CentauriV1 Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(RichTextEditorCentauriV1ComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
