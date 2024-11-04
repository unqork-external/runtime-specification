import { ChartComponentDefinition } from './chart.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Vega Chart Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ChartComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
  })
})
