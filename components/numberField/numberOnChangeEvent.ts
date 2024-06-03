export type NumberOnChangeEvent = {
  target?: {
    value: number | string | undefined
  }
  nativeEvent?: {
    target: {
      rawValue: number | string | undefined
    }
    data?: string | null
  }
}
