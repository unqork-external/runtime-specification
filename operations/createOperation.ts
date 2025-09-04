import type { OperationTypes } from './enums/operation-types.enum'
import { OperationTypeMap } from './typemaps/operation.typemap'
import type { CustomOperationTypeMap } from '../../operations'
import type { InputRef } from '../inputs/inputRef'

/**
 * Given an OperationType, Typescript will complete the options list.
 *
 * In return, the caller receives Typescript constructed class.
 *
 * This includes preset defaults.
 *
 * In essence, this function ensures that all keys are fully present, fully typed, and ready for runtime
 * validation if necessary.
 *
 * @param type
 * @param options
 * @param name name of the operation
 * @param additional
 * @param spreadOp
 * @param additionalArgs
 * @returns - The Operation Class type
 */
export const createOperation = <OpType extends OperationTypes>(
  type: OpType,
  options: InstanceType<(typeof OperationTypeMap)[OpType]>['options'],
  additionalArgs?: Partial<AdditionalArgs>,
): InstanceType<(typeof OperationTypeMap)[OpType]> => {
  const classOpType = OperationTypeMap[type]
  const op = new classOpType()
  return Object.assign(op, {
    type,
    options: {
      ...op.options,
      ...options,
    },
    ...additionalArgs,
  })
}

export const createCustomOperation = <OperationEnum extends string, OpType extends OperationEnum>(
  type: OpType,
  options: InstanceType<CustomOperationTypeMap<OperationEnum>[OpType]['model']>['options'],
  typeMap: CustomOperationTypeMap<OperationEnum>,
  additionalArgs?: Partial<AdditionalArgs>,
) => {
  const classOpType = typeMap[type].model
  const op = new classOpType()
  return Object.assign(op, {
    type,
    options: {
      ...op.options,
      ...options,
    },
    ...additionalArgs,
  })
}

interface AdditionalArgs {
  name: string
  notifyImmediately: boolean
  creatorSummary: string
}
