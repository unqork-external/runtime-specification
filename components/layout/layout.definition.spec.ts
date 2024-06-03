import { LayoutComponentDefinition } from './layout.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Layout Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(LayoutComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
