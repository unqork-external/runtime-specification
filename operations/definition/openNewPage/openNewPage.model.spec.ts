import { OpenNewPageOperation } from './openNewPage.model'
import { OpenNewPageType } from './openNewPageType.enum'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Open New Page Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(OpenNewPageOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        InputRef: {
          properties: {
            alias: {
              type: 'string',
            },
            propertyPath: {
              type: 'string',
            },
            required: {
              type: 'boolean',
            },
            silent: {
              type: 'boolean',
            },
            targetKey: {
              minLength: 1,
              type: 'string',
            },
            type: {
              type: 'string',
            },
          },
          required: ['targetKey'],
          type: 'object',
        },
        OpenNewPageOptions: {
          properties: {
            inputs: {
              description: 'Input field includes key of target, alias of target, target required to be existed ',
              examples: ['[{targetKey: textfield, alias: A, required: true }]'],
              items: {
                $ref: '#/definitions/InputRef',
              },
              type: 'array',
            },
            targetKey: {
              description: 'The key or path to the container we intend to target for an operation',
              type: 'string',
            },
            type: {
              description: 'type should be either PAGEOPEN or PAGE',
              enum: ['PAGEOPEN', 'PAGE'],
              examples: ['PAGEOPEN'],
              minLength: 1,
              type: 'string',
            },
            value: {
              description: 'URL redirect value',
              examples: ['www.google.com'],
              minLength: 1,
              type: 'string',
            },
          },
          required: ['type', 'value'],
          type: 'object',
        },
      },
      properties: {
        name: {
          description: 'Name of the operation',
          type: 'string',
        },
        options: {
          $ref: '#/definitions/OpenNewPageOptions',
        },
        type: {
          const: 'OPEN_NEW_PAGE',
          examples: ['OPEN_NEW_PAGE'],
          type: 'string',
        },
      },
      required: ['options'],
      type: 'object',
    })
  })

  it('Open New Page should validate appropriately', () => {
    const op = createOperation(OperationTypes.OPEN_NEW_PAGE, {
      type: OpenNewPageType.PAGEOPEN,
      value: 'www.google.com',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('Open new page should validate appropriately', () => {
    const op = createOperation(OperationTypes.OPEN_NEW_PAGE, {
      type: OpenNewPageType.PAGEOPEN,
      value: 'www.google.com',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('Page open should validate appropriately', () => {
    const op = createOperation(OperationTypes.OPEN_NEW_PAGE, {
      type: OpenNewPageType.PAGE,
      value: 'www.google.com',
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should error if value is blank', () => {
    const op = createOperation(OperationTypes.OPEN_NEW_PAGE, {
      type: OpenNewPageType.PAGE,
      value: '',
    })

    const isValid = validate(op)
    expect(isValid).toBeFalse()
  })
})
