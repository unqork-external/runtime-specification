import { NumberFieldComponentDefinition } from './numberField.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('NumberField Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(NumberFieldComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
