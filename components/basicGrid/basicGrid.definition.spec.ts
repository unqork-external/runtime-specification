import { BasicGridComponentDefinition } from './basicGrid.definition'
import { generateSchemaAndValidate } from '../../../utilities'

describe('BasicGrid Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(BasicGridComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      columnComponents: {
        items: {
          $ref: '#/definitions/BaseComponentDefinition',
        },
        type: 'array',
      },
      columnHeaders: {
        type: 'array',
      },
      columns: {
        type: 'array',
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      display: {
        $ref: '#/definitions/Display',
      },
      eventHandlers: {
        $ref: '#/definitions/ComponentEventHandlers',
      },
      groupBy: {
        type: 'array',
      },
      initialData: {
        type: 'array',
      },
      inputs: {
        items: {
          $ref: '#/definitions/InputRef',
        },
        type: 'array',
      },
      key: {
        description:
          // eslint-disable-next-line max-len
          "A user-defined key that is unique within a module. It doesn't have to be unique across different modules. Objects in the runtime use keys to target other components.",
        examples: ['I am the key', 'bestKeyEver'],
        minLength: 1,
        type: 'string',
      },
      nestables: {
        type: 'object',
      },
      rowComponents: {
        items: {
          $ref: '#/definitions/BaseComponentDefinition',
        },
        type: 'array',
      },
      rows: {
        type: 'array',
      },
      type: {
        const: 'basicgrid',
        description: 'Name of the type of component.',
        examples: ['basicgrid'],
        minLength: 1,
        type: 'string',
      },
      validation: {
        $ref: '#/definitions/Validation',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: {
        items: {
          $ref: '#/definitions/Watcher',
        },
        type: 'array',
      },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
