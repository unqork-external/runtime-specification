import { TableSetNavigateDownOnPressEnterOperation } from './tableSetNavigateDownOnPressEnter.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetNavigateDownOnPressEnter Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetNavigateDownOnPressEnterOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
