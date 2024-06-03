import { MenuComponentDefinition } from './menu.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Menu Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MenuComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
