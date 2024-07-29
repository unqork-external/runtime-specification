import { ComboboxComponentDefinition } from './combobox.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Combobox Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ComboboxComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
