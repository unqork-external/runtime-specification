import { DownloadFileOperation } from './downloadFile.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: DownloadFile Tests', () => {
  let schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(DownloadFileOperation)
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toMatchSnapshot()
  })
})
