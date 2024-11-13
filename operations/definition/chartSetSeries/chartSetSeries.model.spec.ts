import { ChartSetSeriesOperation } from './chartSetSeries.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ChartSetSeries Tests', () => {
  it('ChartSetSeries Model', () => {
    const { schema } = generateSchemaAndValidate(ChartSetSeriesOperation)

    expect(schema).toMatchSnapshot()
  })
})
