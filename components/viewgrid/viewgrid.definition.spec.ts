import { ViewgridComponentDefinition } from './viewgrid.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('View Grid Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(ViewgridComponentDefinition)

    expect(schema.required).toEqual(['key', 'type', 'rowCount'])
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
      type: { const: 'viewgrid', description: 'Type of the component.', type: 'string', minLength: 1 },
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
      value: {
        description: 'Current value of the component',
        type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object'],
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      displaySettings: { $ref: '#/definitions/ViewgridDisplaySettings' },
      data: { $ref: '#/definitions/ViewgridData' },
      columns: { type: 'array', items: { $ref: '#/definitions/ViewgridColumn' } },
      vgScope: { type: 'object' },
      rowCount: { type: 'object', default: 0 },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
