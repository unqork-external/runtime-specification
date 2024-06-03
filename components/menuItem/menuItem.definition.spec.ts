import { MenuItemComponentDefinition } from './menuItem.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Menu Item Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MenuItemComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
