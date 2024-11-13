import { ChartSetLegendPositionOperation } from './chartSetLegendPosition.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ChartSetLegendPosition Tests', () => {
  it('ChartSetLegendPosition Model', () => {
    const { schema } = generateSchemaAndValidate(ChartSetLegendPositionOperation)

    expect(schema).toMatchSnapshot()
  })
})
