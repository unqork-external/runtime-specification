import { DropdownComponentDefinition } from './dropdown.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Dropdown Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DropdownComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
