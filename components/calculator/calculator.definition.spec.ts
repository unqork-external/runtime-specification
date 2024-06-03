import { CalculatorComponentDefinition } from './calculator.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Calculator Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(CalculatorComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
