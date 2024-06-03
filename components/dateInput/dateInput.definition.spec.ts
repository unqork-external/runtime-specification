import { DateInputComponentDefinition } from './dateInput.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Date Input Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(DateInputComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
