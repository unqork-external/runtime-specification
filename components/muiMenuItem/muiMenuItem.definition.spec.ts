import { MuiMenuItemComponentDefinition } from './muiMenuItem.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('MUI Menu Item Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MuiMenuItemComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
