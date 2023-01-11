import { environment } from "projects/shell/src/environments/environment"

/**
 * Awaits one tick to avoid one-time devMode
 * unidirectional-data-flow-violation error
 * @param callback
 */
export function awaitChilds(callback: (args: void) => void): void {
  // if (environment.production) {
  //   callback()
  //   return
  // }

  setTimeout(callback, 0)
}
