import { OperationTypes } from './enums/operation-types.enum'
import { OperationTypeMap } from './typemaps/operation.typemap'

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
 * @returns - The Operation Class type
 */
export const createOperation = <OpType extends OperationTypes>(
  type: OpType,
  options: (typeof OperationTypeMap)[OpType]['prototype']['options'],
  name?: string,
): InstanceType<(typeof OperationTypeMap)[OpType]> => {
  const classOpType = OperationTypeMap[type]
  const op = new classOpType()
  return Object.assign(op, {
    name,
    type,
    options: {
      ...op.options,
      ...options,
    },
  })
}
