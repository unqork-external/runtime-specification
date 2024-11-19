/**
 * Settings to control the display of a header/footer module
 */
export type DisplayHeaderFooterSetting = {
  /**
   * Should the header/footer be skipped.
   */
  hide?: boolean

  /**
   * The module Id to use for a header/footer.
   * Defaults to the module defined in the environment:
   * __UNQENV__.APP_HEADER_ID/APP_FOOTER_ID
   */
  moduleId?: string
}

/**
 * Override settings for the header/footer module.
 * Normally controlled by __UNQENV__ settings.
 */
export type HeaderFooterOverride = {
  header?: DisplayHeaderFooterSetting
  footer?: DisplayHeaderFooterSetting
}
