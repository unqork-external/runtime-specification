import { PositionComponentDefinition, PositionComponentState } from './position.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Position Contract Tests', function () {
  it('should ensure the contract is clear - component defintion', function () {
    const { schema } = generateSchemaAndValidate(PositionComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })

  it('should ensure the contract is clear - component state', function () {
    const { schema } = generateSchemaAndValidate(PositionComponentState)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
