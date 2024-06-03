type ReactHandlerString = `on${string}`
type BindingFunction = (incomingEvent?: Event | any, ...args: any[]) => Promise<void> | void | any

// prettier-ignore
type ReducedBaseStringToFunction<T extends string> = Partial<
  Record<
    T,
    BindingFunction
  >
>

export type ReactEventHandlers = ReducedBaseStringToFunction<ReactHandlerString>
