import { JsonSchemaViewerComponentDefinition } from './jsonSchemaViewer.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('JsonSchemaViewer Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(JsonSchemaViewerComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
