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
    expect(schema).toMatchSnapshot()
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
