import { PluginComponentDefinition } from './plugin.definition'
import { generateSchemaAndValidate, trimAll } from '../../../utilities'

describe('Plugin Contract Tests', function () {
  it('should ensure the contract is clear', function () {
    const { schema } = generateSchemaAndValidate(PluginComponentDefinition)

    expect(schema.required).toEqual(['key', 'type'])
    expect(schema.properties).toEqual({
      key: {
        type: 'string',
        examples: ['I am the key', 'bestKeyEver'],
        minLength: 1,
        description: trimAll(`
          A user-defined key that is unique within a module. 
          It doesn't have to be unique across different modules. 
          Objects in the runtime use keys to target other components.
        `),
      },
      type: {
        type: 'string',
        minLength: 1,
        const: 'plugin',
        description: 'Type of component.',
        examples: ['plugin'],
      },
      executable: {
        default: true,
        description:
          // eslint-disable-next-line max-len
          'Defines whether or not the object will respond to events or fire operations. When `true`, the object will perform and behave as defined in its spec. When `false`, the object will no longer be responsive to the system.',
        type: 'boolean',
      },
      eventHandlers: { $ref: '#/definitions/ComponentEventHandlers' },
      inputs: { type: 'array', items: { $ref: '#/definitions/InputRef' } },
      validation: {
        $ref: '#/definitions/Validation',
      },
      value: {
        description:
          // eslint-disable-next-line max-len
          "Whenever a plugin's API_CALL operation is executed, the response should be stored under this key. It could be any data type.",
        examples: [
          // eslint-disable-next-line max-len
          '{\n  "args": {\n    "key": "testValue"\n  },\n  "headers": {\n    "x-forwarded-proto": "https",\n    "x-forwarded-port": "443",\n    "host": "postman-echo.com",\n    "x-amzn-trace-id": "Root=1-65313564-0958ee5d3fb1592e3908a6be",\n    "accept": "application/json, text/plain, */*",\n    "authorization": "Basic cG9zdG1hbjpwYXNzd29yZA==",\n    "user-agent": "axios/1.2.4",\n    "accept-encoding": "gzip, compress, deflate, br"\n  },\n  "url": "https://postman-echo.com/get?key=testValue"\n}',
        ],
        type: 'object',
      },
      watchers: { type: 'array', items: { $ref: '#/definitions/Watcher' } },
      styling: {
        $ref: '#/definitions/StylingModel',
      },
    })
  })
})
