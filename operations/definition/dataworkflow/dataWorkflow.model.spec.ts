import { DataWorkflowOperation } from './dataWorkflow.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: DataWorkflowOperation Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(DataWorkflowOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
