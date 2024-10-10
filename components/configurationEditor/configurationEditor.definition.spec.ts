import {
  ConfigurationEditorComponentDefinition,
  ConfigurationEditorComponentState,
} from './configurationEditor.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('ConfigurationEditor Contract Tests', function () {
  it('should ensure the contract is clear - component definition', function () {
    const { schema } = generateSchemaAndValidate(ConfigurationEditorComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(ConfigurationEditorComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
