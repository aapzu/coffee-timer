interface Console {
  draft: <T extends Array<any> = string[]>(...a: T) => (...b: T) => void
}

declare module "draftlog" {
  function DraftLog(c: typeof console): void
  export default DraftLog
}
