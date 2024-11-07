import type { OperationTypes } from '@unqork/runtime-types'

/**
 * Mode for the operations settings. Defines what ops are allowed/disallowed.
 */
export enum OperationsAllowMode {
  /**
   * operations contains list of allowed operations
   */
  WHITELIST = 'whitelist',

  /**
   * operations contains list of disallowed operations
   */
  BLACKLIST = 'blacklist',

  /**
   * All operations are disabled
   */
  DISABLED = 'disabled',

  /**
   * All operations are allowed
   */
  ALL = 'all',
}

/**
 * Controls what operations are allowed via white/blacklists
 */
export type OperationsSettings = {
  mode: OperationsAllowMode

  /**
   * List of operations depending on mode.
   * Uses a record for quick operation lookup.
   * Existence of key with a truthy value is all that is required,
   * but value may be used for future operation options.
   */
  operations?: Partial<Record<OperationTypes, unknown>>
}
