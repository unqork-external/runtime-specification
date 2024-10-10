import { OperationsBuilderComponentDefinition, OperationsBuilderComponentState } from './operationsBuilder.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('OperationsBuilder Contract Tests', function () {
  it('should ensure the contract is clear - component definition', function () {
    const { schema } = generateSchemaAndValidate(OperationsBuilderComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it.skip('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(OperationsBuilderComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
