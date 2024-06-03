import { PositionComponentDefinition } from './position.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Position Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(PositionComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
