import { UdDataWorkflowCanvasComponentDefinition } from './udDataWorkflowCanvas.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('UD Data Workflow Canvas Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(UdDataWorkflowCanvasComponentDefinition)

    expect(schema.required).toMatchSnapshot()
    expect(schema.properties).toMatchSnapshot()
    expect(schema.definitions).toMatchSnapshot()
  })
})
