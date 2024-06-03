import { ConfigurationEditorComponentDefinition } from './configurationEditor.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('ConfigurationEditor Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ConfigurationEditorComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
