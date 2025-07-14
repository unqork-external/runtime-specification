import { Mapv2ComponentDefinition } from './mapv2.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Mapv2 Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(Mapv2ComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
