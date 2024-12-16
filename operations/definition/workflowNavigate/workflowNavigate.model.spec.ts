import { WorkflowNavigateOperation } from './workflowNavigate.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: WorkflowNavigate Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(WorkflowNavigateOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
