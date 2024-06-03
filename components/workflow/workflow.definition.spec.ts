import { WorkflowComponentDefinition } from './workflow.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('Workflow Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(WorkflowComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
