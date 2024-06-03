import { SingleCheckboxComponentDefinition } from './singleCheckbox.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Single Checkbox Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(SingleCheckboxComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
