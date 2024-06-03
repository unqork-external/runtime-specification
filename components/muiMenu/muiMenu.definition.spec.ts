import { MuiMenuComponentDefinition } from './muiMenu.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('MUI Menu Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(MuiMenuComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
