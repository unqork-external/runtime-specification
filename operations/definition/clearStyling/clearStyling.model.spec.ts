import { ClearStylingOperation } from './clearStyling.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Clear Styling Operation Model', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ClearStylingOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
