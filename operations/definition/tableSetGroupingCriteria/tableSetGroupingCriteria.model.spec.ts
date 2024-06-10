import { TableSetGroupingCriteriaOperation } from './tableSetGroupingCriteria.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: TableSetGroupingCriteria Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetGroupingCriteriaOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
