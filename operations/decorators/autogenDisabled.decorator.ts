import { JsonEntityStore } from '@tsed/schema'

/**
 * When this decorator applied to the operation model:
 *  - Adds `autogenDisabled` to the operation schema
 *  - Ops builder is going to render code editor field in the operation configuration
 */
export const AutogenDisabled = () => {
  return (...args: any) => {
    const entity = JsonEntityStore.from(...args)
    entity.schema.set('autogenDisabled', true)
  }
}
