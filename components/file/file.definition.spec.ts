import { FileDefinition } from './file.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('File Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(FileDefinition)

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
        description: 'Describes the File type',
        const: 'file',
        examples: ['file'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      field: { $ref: '#/definitions/InputField' },
      display: { $ref: '#/definitions/Display' },
      validation: { $ref: '#/definitions/Validation' },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      value: {
        type: 'array',
        description: 'Value of the File component. Will be undefined if not set.',
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      options: { $ref: '#/definitions/FileOptions' },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
