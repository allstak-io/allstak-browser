/**
 * @allstak/browser — browser-specific public API.
 *
 * When initialized via `AllStak.init({...})` from `@allstak/core`, the
 * underlying client automatically wires:
 *   - window.onerror + window.onunhandledrejection capture
 *   - fetch instrumentation (breadcrumbs + /requests ingest)
 *   - console.warn / console.error breadcrumbs
 *   - optional session replay (enable via `sessionReplay: { enabled: true }`)
 *
 * This package re-exports those APIs and adds nothing that isn't already
 * in the core client — it exists so app developers can depend on
 * `@allstak/browser` and get intellisense that only shows browser-safe APIs.
 */
export { AllStak } from '@allstak/core';
export type {
  AllStakConfig,
  Breadcrumb,
  HttpRequestItem,
} from '@allstak/core';

/** Convenience helpers for manual instrumentation. */
export { captureException, captureMessage, setUser, setTag } from './helpers';
