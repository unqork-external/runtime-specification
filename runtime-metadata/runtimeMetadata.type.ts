export const RUNTIME_METADATA_KEY: string = '__VEGA_RUNTIME_METADATA__' as const

export type RuntimeMetadata = {
  moduleId?: string
  parentKey?: string
} & Record<string, unknown>
