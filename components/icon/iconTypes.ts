export enum IconSource {
  FONT_AWESOME = 'fontAwesome',
  URL = 'url',
  CSS = 'css',
}

/**
 * Icon Source map to help match a string to an IconSource type
 */
export const IconSourceMap: Record<string, IconSource | undefined> = {
  [IconSource.CSS]: IconSource.CSS,
  [IconSource.FONT_AWESOME]: IconSource.FONT_AWESOME,
  [IconSource.URL]: IconSource.URL,
}
