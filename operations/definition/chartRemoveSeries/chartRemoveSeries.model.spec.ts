import { ChartRemoveSeriesOperation } from './chartRemoveSeries.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ChartRemoveSeries Tests', () => {
  it('ChartRemoveSeries Model', () => {
    const { schema } = generateSchemaAndValidate(ChartRemoveSeriesOperation)

    expect(schema).toMatchSnapshot()
  })
})
