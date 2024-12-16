import { WorkflowSaveAndExitOperation } from './workflowSaveAndExit.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: WorkflowSaveAndExit Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(WorkflowSaveAndExitOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
