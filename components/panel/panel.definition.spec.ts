import { PanelComponentDefinition } from './panel.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Panel Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(PanelComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
