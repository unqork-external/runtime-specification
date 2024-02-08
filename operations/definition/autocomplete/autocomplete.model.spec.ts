import { AutocompleteOperation } from './autocomplete.model'
import { generateSchemaAndValidate } from '../../../../utilities/generateSchemaAndValidate/generateSchemaAndValidate'

describe('Operation Model: Autocomplete Tests', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(AutocompleteOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toEqual({
      definitions: {
        AutocompleteOperationOptions: {
          properties: {
            outputData: {
              $ref: '#/definitions/Output',
            },
            property: {
              default: 'value',
              type: 'string',
            },
            query: {
              $ref: '#/definitions/Query',
            },
            searchData: {
              $ref: '#/definitions/SearchData',
            },
            targetKey: {
              minLength: 1,
              type: 'string',
            },
          },
          required: ['targetKey', 'searchData', 'query', 'outputData'],
          type: 'object',
        },
        Output: {
          properties: {
            property: {
              default: 'value',
              type: 'string',
            },
            targetKey: {
              minLength: 1,
              type: 'string',
            },
          },
          required: ['targetKey'],
          type: 'object',
        },
        Query: {
          properties: {
            jsonPath: {
              description: '\n    Use JSONPath to search through the data for your intended options.\n  ',
              minLength: 1,
              type: 'string',
            },
          },
          required: ['jsonPath'],
          type: 'object',
        },
        SearchData: {
          properties: {
            property: {
              default: 'value',
              type: 'string',
            },
            targetKey: {
              minLength: 1,
              type: 'string',
            },
          },
          required: ['targetKey'],
          type: 'object',
        },
      },
      properties: {
        options: {
          $ref: '#/definitions/AutocompleteOperationOptions',
        },
        type: {
          const: 'AUTOCOMPLETE',
          examples: ['AUTOCOMPLETE'],
          type: 'string',
        },
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })
})
