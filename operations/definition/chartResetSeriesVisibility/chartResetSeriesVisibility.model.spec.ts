import { ChartResetSeriesVisibilityOperation } from './chartResetSeriesVisibility.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ChartResetSeriesVisibility Tests', () => {
  it('ChartResetSeriesVisibility Model', () => {
    const { schema } = generateSchemaAndValidate(ChartResetSeriesVisibilityOperation)

    expect(schema).toMatchSnapshot()
  })
})
