import { SetStylingTargetOperation } from './setStylingTarget.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Set Styling Target Operation Model', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SetStylingTargetOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
