declare namespace NodeJS {
  interface ProcessEnv {
    /** Production origin, e.g. https://www.zynovate.com. Inlined at build time. */
    readonly NEXT_PUBLIC_SITE_URL?: string;
  }
}
