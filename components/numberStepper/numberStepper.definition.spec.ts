import { NumberStepperComponentDefinition } from './numberStepper.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('NumberStepper Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(NumberStepperComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
