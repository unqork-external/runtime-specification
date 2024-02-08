import { ToggleClassOnTargetOperation } from './toggleClassOnTarget.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Toggle Class On Target Operation Model', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ToggleClassOnTargetOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
