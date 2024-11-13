import { ChartToggleSeriesVisibilityOperation } from './chartToggleSeriesVisibility.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ChartToggleSeriesVisibility Tests', () => {
  it('ChartToggleSeriesVisibility Model', () => {
    const { schema } = generateSchemaAndValidate(ChartToggleSeriesVisibilityOperation)

    expect(schema).toMatchSnapshot()
  })
})
