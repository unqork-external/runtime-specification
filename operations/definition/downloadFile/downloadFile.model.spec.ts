import { DownloadFileOperation } from './downloadFile.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: DownloadFile Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(DownloadFileOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        DownloadFileOperationOptions: {
          properties: {
            filename: {
              description: 'String for the name of the file to be saved as (default: filename in the url)',
              minLength: 1,
              type: 'string',
            },
            targetKey: {
              description:
                "Key or path to send operation to. If specified, overrides any `targetKey` in dynamic operation's options",
              type: 'string',
            },
            url: {
              description: 'URL to the file to be downloaded',
              minLength: 1,
              type: 'string',
            },
          },
          required: ['url', 'filename'],
          type: 'object',
        },
      },
      properties: {
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/DownloadFileOperationOptions',
        },
        type: {
          const: 'DOWNLOAD_FILE',
          examples: ['DOWNLOAD_FILE'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
