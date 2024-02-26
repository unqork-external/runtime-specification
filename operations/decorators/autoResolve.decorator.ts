interface CustomDecoratorArgs<T = unknown> {
  dataKey: string
  valueToStore?: T
}

interface StoredValue<T = unknown> {
  property: string
  stored?: T
}

interface AutoResolveArgs {
  // the path to set on the option
  to: string
}

const dataKey = 'RUNTIME_AUTO_VALUE_RESOLVE'

export const AutoResolve = (args: AutoResolveArgs) => {
  return createPropertyDecorator({
    dataKey,
    valueToStore: {
      to: args.to,
    },
  })
}

const createPropertyDecorator = (args: CustomDecoratorArgs) => {
  return function (target: any, property: string) {
    const { dataKey, valueToStore } = args
    const previous = Reflect.getMetadata(dataKey, target) || []
    Reflect.defineMetadata(
      dataKey,
      [
        ...previous,
        {
          args: valueToStore,
          property,
        } as StoredValue,
      ],
      target,
    )
    return target
  }
}
