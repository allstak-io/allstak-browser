import { AllStak } from '@allstak/core';

/** Capture an Error; no-op if `init()` has not been called. */
export function captureException(error: Error, context?: Record<string, unknown>): void {
  try { AllStak.captureException(error, context); } catch { /* never break host */ }
}

export function captureMessage(message: string, level: 'fatal' | 'error' | 'warning' | 'info' = 'info'): void {
  try { AllStak.captureMessage(message, level); } catch { /* never break host */ }
}

export function setUser(user: { id?: string; email?: string }): void {
  try { AllStak.setUser(user); } catch { /* never break host */ }
}

export function setTag(key: string, value: string): void {
  try { AllStak.setTag(key, value); } catch { /* never break host */ }
}
