import { generateSchemaAndValidate } from '../../../../utilities'
import { TableSetRowDensityOperation } from '../tableSetRowDensity/tableSetRowDensity.model'

describe('Operation Model: TableSetRowDensity Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(TableSetRowDensityOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
