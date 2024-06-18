import { ConfigurationEditorSaveOperation } from './configurationEditorSave.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: ConfigurationEditorSave Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(ConfigurationEditorSaveOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
