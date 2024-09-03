import { ExecuteExternalCommandOperation } from './executeExternalCommand.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ExecuteExternalCommand Tests', () => {
  it('ExecuteExternalCommand Model', () => {
    const { schema } = generateSchemaAndValidate(ExecuteExternalCommandOperation)

    expect(schema).toMatchSnapshot()
  })
})
