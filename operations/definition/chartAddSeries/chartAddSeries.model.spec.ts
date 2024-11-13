import { ChartAddSeriesOperation } from './chartAddSeries.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ChartAddSeries Tests', () => {
  it('ChartAddSeries Model', () => {
    const { schema } = generateSchemaAndValidate(ChartAddSeriesOperation)

    expect(schema).toMatchSnapshot()
  })
})
