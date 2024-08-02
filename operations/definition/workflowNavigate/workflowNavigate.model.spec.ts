import { WorkflowNavigateOperation } from './workflowNavigate.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: WorkflowNavigate Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(WorkflowNavigateOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
