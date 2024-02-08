/* eslint-disable max-len */
import { SetPopupAlertOperation } from './setPopupAlert.model'
import { generateSchemaAndValidate } from '../../../../utilities'
import { createOperation } from '../../createOperation'
import { OperationTypes } from '../../enums/operation-types.enum'

describe('Set Property Model', () => {
  let validate, schema
  beforeAll(() => {
    const response = generateSchemaAndValidate(SetPopupAlertOperation)
    validate = response.validate
    schema = response.schema
  })

  it('should match this JSON Schema', () => {
    expect(schema).toStrictEqual({
      definitions: {
        PopUpAlertOptions: {
          properties: {
            allowOutsideClick: {
              description: 'Toggle the ability to close popup with a click outside of the popup modal',
              type: 'boolean',
            },
            apiCallErrors: {
              description: 'Errors we recieve if the api call fails',
              type: 'object',
            },
            text: {
              description: 'A description for the popup.',
              type: 'string',
            },
            title: {
              description: 'The title of the popup, as HTML.',
              type: 'string',
            },
            buttonsStyling: {
              description:
                'Apply default styling to buttons. If you want to use your own classes, set this parameter to false',
              type: 'boolean',
            },
            cancelButtonText: {
              default: 'Cancel',
              description: 'Use this to change the text on the "Cancel" button.',
              type: 'string',
            },
            confirmButtonText: {
              default: 'OK',
              description: 'Use this to change the text on the "Confirm" button.',
              type: 'string',
            },
            confirmButtonColor: {
              description: 'Use this to change the color on the "Confirm" button.',
              type: 'string',
            },
            customClass: {
              description: 'Used to add classes for components inside of the modal.',
              type: 'object',
            },
            shouldAutoClose: {
              default: false,
              description: 'Should autoclose the popup without user interaction',
              type: 'boolean',
            },
            icon: {
              description: 'An icon for the modal. SweetAlert comes with 5 built-in icons that you can use',
              type: 'string',
            },
            showCancelButton: {
              description:
                'If set to true, a "Cancel" button will be shown, which the user can click on to dismiss the modal.',
              type: 'boolean',
            },
            showConfirmButton: {
              description:
                'If set to true, a "Confirm" button will be shown, which the user can click on to dismiss the modal.',
              type: 'boolean',
            },
            timer: {
              description: 'Amount of time before the popup modal automatically closes',
              type: 'number',
            },
            validationErrorCount: {
              description: 'Total errors from our validation system',
              type: 'number',
            },
          },
          type: 'object',
        },
        SetPopupAlertOptions: {
          properties: {
            value: {
              $ref: '#/definitions/PopUpAlertOptions',
            },
            targetKey: {
              description: 'The key or path to the container we intend to target for an operation',
              type: 'string',
            },
          },
          required: ['value'],
          type: 'object',
        },
      },
      properties: {
        options: {
          $ref: '#/definitions/SetPopupAlertOptions',
        },
        type: {
          const: 'SET_POPUP_ALERT',
          examples: ['SET_POPUP_ALERT'],
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

  it('should validate appropriately', () => {
    const op = createOperation(OperationTypes.SET_POPUP_ALERT, {
      value: {
        buttonsStyling: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'OK',
        icon: 'warning',
        showCancelButton: true,
        text: 'Please be sure',
        title: 'Are you sure?',
      },
    })

    const isValid = validate(op)
    expect(isValid).toBeTrue()
  })

  it('should property set up the popup alert value', () => {
    const op = createOperation(OperationTypes.SET_POPUP_ALERT, {
      value: {
        buttonsStyling: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'OK',
        icon: 'warning',
        showCancelButton: true,
        text: 'Please be sure',
        title: 'Are you sure?',
      },
    })

    expect(op.options.value.buttonsStyling).toStrictEqual(true)
    expect(op.options.value.cancelButtonText).toStrictEqual('Cancel')
    expect(op.options.value.confirmButtonText).toStrictEqual('OK')
    expect(op.options.value.icon).toStrictEqual('warning')
    expect(op.options.value.showCancelButton).toStrictEqual(true)
    expect(op.options.value.text).toStrictEqual('Please be sure')
    expect(op.options.value.title).toStrictEqual('Are you sure?')
  })
})
