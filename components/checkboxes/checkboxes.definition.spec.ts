import { CheckboxesComponentDefinition } from './checkboxes.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Checkboxes Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(CheckboxesComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
