import { ColumnsComponentDefinition } from './columns.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Columns Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ColumnsComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      key: {
        type: 'string',
        minLength: 1,
        description: trimAll(`
          A user-defined key that is unique within a module. 
          It doesn't have to be unique across different modules. 
          Objects in the runtime use keys to target other components.
        `),
        examples: ['I am the key', 'bestKeyEver'],
      },
      type: {
        type: 'string',
        minLength: 1,
        const: 'columns',
        description: `This is a 'Columns' component.`,
        examples: ['columns'],
      },
      components: {
        type: 'array',
        description:
          "The 'components' property holds the initial configs of all the components that will be rendered in every column.",
        items: { $ref: '#/definitions/BaseComponentDefinition' },
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      nestables: {
        type: 'object',
        description: 'Nestable information for columns',
      },
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      columns: {
        type: 'array',
        description:
          // eslint-disable-next-line max-len
          "The 'columns' property holds an array of objects that describe each column that should be rendered. Each column object holds references to the components nested inside of it and details related to it's layout.",
        items: {
          $ref: '#/definitions/ColumnData',
        },
      },
      childIds: { type: 'array', description: 'Child ids for all nestable references within the component.' },
      styling: {
        $ref: '#/definitions/ColumnsStyling',
      },
    })
  })
})
