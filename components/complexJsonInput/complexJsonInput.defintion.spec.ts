import { ComplexJsonInputComponentDefinition, ComplexJsonInputComponentState } from './complexJsonInput.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('ConfigurationEditor Contract Tests', function () {
  it('should ensure the contract is clear - component definition', function () {
    const { schema } = generateSchemaAndValidate(ComplexJsonInputComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(ComplexJsonInputComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
