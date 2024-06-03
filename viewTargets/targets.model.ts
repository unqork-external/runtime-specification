/**
 * Given some enum of possible valid targets, this is the output model we can expect
 */
export type TargetsModel<T extends string> = {
  [key in T]: any
}
