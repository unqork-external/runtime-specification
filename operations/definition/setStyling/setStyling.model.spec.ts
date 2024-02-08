import { SetStylingOperation } from './setStyling.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Set Styling Operation Model', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SetStylingOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
