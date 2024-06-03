import { PluginComponentDefinition } from './plugin.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Plugin Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(PluginComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
