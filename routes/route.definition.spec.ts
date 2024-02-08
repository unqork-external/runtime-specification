import { RouteDefinition } from './route.definition'
import { generateSchemaAndValidate } from '../../utilities'

describe('Route Definition Test', function () {
  it('should match expected schema', function () {
    const { schema } = generateSchemaAndValidate(RouteDefinition)

    expect(schema.type).toBe('object')
    expect(schema.required).toEqual(['pattern'])
    expect(schema.properties).toEqual({
      pattern: {
        type: 'string',
        description:
          // eslint-disable-next-line max-len
          "The pattern used to match the current url. If the pattern for this route matches the current url, the module referenced by 'moduleId' will render in the configured 'slot'. The eventHandlers within this route definition will also apply.",
        examples: ['/home or /contact/:contactId'],
        pattern: '^(\\/:?[a-zA-Z0-9-_]+)+$',
        minLength: 1,
      },
      moduleId: {
        type: 'string',
        description:
          // eslint-disable-next-line max-len
          "Module id corresponding to the module that should render when this route's pattern is matched. The module must already be loaded into the runtime. It will be rendered in the configured 'slot'.",
        examples: ['651dcd49f453bd985b627d81'],
      },
      slot: {
        type: 'string',
        description: 'Name of the slot in which the module for the route should render.',
        examples: ['Slot'],
      },
      eventHandlers: {
        type: 'object',
        additionalProperties: { $ref: '#/definitions/OperationsArray' },
        description: 'Event handlers that will apply when this route is matched.',
        examples: [
          {
            SUBMISSION_SAVED: {
              operations: [
                { type: 'SET_PROPERTY', options: { targetKey: 'component', property: 'foo', value: 'bar' } },
              ],
            },
          },
        ],
      },
    })
  })

  it('should validate that route patterns are respected', function () {
    const { validate } = generateSchemaAndValidate(RouteDefinition)

    expect(validate({ pattern: '/home' })).toBe(true)
    expect(validate({ pattern: '/contact/:contactId' })).toBe(true)
    expect(validate({ pattern: '' })).toBe(false)
    expect(validate({ pattern: '/foo//bar' })).toBe(false)
    expect(validate({ pattern: '/::doubleColonNotValid' })).toBe(false)
  })
})
