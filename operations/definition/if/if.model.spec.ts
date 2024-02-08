import { IfOperation } from './if.model'
import { generateSchemaAndValidate } from '../../../../utilities'

describe('Operation Model: If Tests', () => {
  it('test that the schema matches our expectations', () => {
    const response = generateSchemaAndValidate(IfOperation)
    const def = response.schema
    const d = {
      properties: def.properties,
      required: def.required,
      type: def.type,
    }
    const options = def.definitions.IfOperationOptions

    expect(options).toEqual({
      properties: {
        conditions: {
          description:
            //eslint-disable-next-line max-len
            'The set of conditions to fire or evaluate. This could be represented as something as simple as firstName.value == "john" or an operation like VALIDATE.',
          items: {
            $ref: '#/definitions/Condition',
          },
          type: 'array',
        },
        onFail: {
          description:
            //eslint-disable-next-line max-len
            "Optionally set a bunch of operations to fire when if the conditions return as a failure. If the conditions fail and error, we'll run the fail operations, and terminate the operation chain.",
          items: {
            $ref: '#/definitions/Operation',
          },
          type: 'array',
        },
        whenFalse: {
          description:
            //eslint-disable-next-line max-len
            "Optionally set a bunch of operations to fire when if the conditions return as unsuccessful. If unsuccessful, we'll run the false conditions, and continue down the operation chain.",
          items: {
            $ref: '#/definitions/Operation',
          },
          type: 'array',
        },
        whenTrue: {
          description:
            //eslint-disable-next-line max-len
            'Optionally set a bunch of operations to fire when if the conditions return as successful. This is not intended to always be used - this is a convenience field in case it reads better for the user Operations continue firing if the conditions are true anyway. if you put all happy path execution in a `whenTrue` you risk causing a Pyramid of Doom antipattern for logical representation.',
          items: {
            $ref: '#/definitions/Operation',
          },
          type: 'array',
        },
      },
      type: 'object',
    })

    expect(d).toEqual({
      properties: {
        options: {
          $ref: '#/definitions/IfOperationOptions',
        },
        type: {
          const: 'IF',
          examples: ['IF'],
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
