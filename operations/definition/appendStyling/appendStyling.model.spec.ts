import { AppendStylingOperationOptions } from './appendStyling.options'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Append Styling To Target Operation Model', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(AppendStylingOperationOptions)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
