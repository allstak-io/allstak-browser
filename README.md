# @allstak/browser

**Error tracking and session replay for browser apps. Drop-in, tree-shakable, framework-free.**

[![npm version](https://img.shields.io/npm/v/@allstak/browser.svg)](https://www.npmjs.com/package/@allstak/browser)
[![CI](https://github.com/allstak-io/allstak-browser/actions/workflows/ci.yml/badge.svg)](https://github.com/allstak-io/allstak-browser/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Official AllStak SDK for browsers and SPAs — captures uncaught errors, console logs, fetch requests, and optional session replay.

## Dashboard

View captured events live at [app.allstak.sa](https://app.allstak.sa).

![AllStak dashboard](https://app.allstak.sa/images/dashboard-preview.png)

## Features

- `window.onerror` + `unhandledrejection` auto-capture
- `fetch` instrumentation (breadcrumbs + outbound request telemetry)
- `console.warn` / `console.error` breadcrumbs
- Optional session replay (DOM + input events, PII masking)
- User, tag, and trace context helpers
- Tiny runtime with tree-shakable ES modules

## What You Get

Once integrated, every event flows to your AllStak dashboard:

- **Errors** — stack traces, breadcrumbs, release + environment tags
- **Logs** — console warnings and errors as structured breadcrumbs
- **HTTP** — outbound `fetch` timing, status codes, failed calls
- **Session replay** — DOM and input playback with PII masking (opt-in)
- **Alerts** — email and webhook notifications on regressions

## Installation

```bash
npm install @allstak/browser
```

## Quick Start

> Create a project at [app.allstak.sa](https://app.allstak.sa) to get your API key.

```ts
import { AllStak } from '@allstak/browser';

AllStak.init({
  apiKey: import.meta.env.VITE_ALLSTAK_API_KEY,
  environment: 'production',
  release: 'web@1.2.0',
});

AllStak.captureException(new Error('test: hello from allstak-browser'));
```

Open the page — the test error appears in your dashboard within seconds.

## Get Your API Key

1. Sign up at [app.allstak.sa](https://app.allstak.sa)
2. Create a project
3. Copy your API key from **Project Settings → API Keys**
4. Export it as `ALLSTAK_API_KEY` or pass it to `AllStak.init(...)`

## Configuration

| Option | Type | Required | Default | Description |
|---|---|---|---|---|
| `apiKey` | `string` | yes | — | Project API key (`ask_live_…`) |
| `environment` | `string` | no | — | Deployment env |
| `release` | `string` | no | — | Version or git SHA |
| `host` | `string` | no | `https://api.allstak.sa` | Ingest host override |
| `user` | `{ id?, email? }` | no | — | Default user context |
| `tags` | `Record<string,string>` | no | — | Default tags |
| `autoBreadcrumbs` | `boolean` | no | `true` | Capture fetch/console breadcrumbs |
| `sessionReplay.enabled` | `boolean` | no | `false` | Enable session replay |
| `sessionReplay.maskAllInputs` | `boolean` | no | `true` | Mask all `<input>` values |
| `sessionReplay.sampleRate` | `number` | no | `1.0` | 0.0–1.0 sampling rate |

## Example Usage

Capture an exception:

```ts
import { captureException } from '@allstak/browser';
captureException(new Error('Checkout UI broke'));
```

Send a message:

```ts
import { captureMessage } from '@allstak/browser';
captureMessage('Feature flag "new-nav" enabled', 'info');
```

Set user + tag:

```ts
import { setUser, setTag } from '@allstak/browser';
setUser({ id: 'u_42', email: 'alice@example.com' });
setTag('build', 'web-2024.04.23');
```

## Production Endpoint

Production endpoint: `https://api.allstak.sa`. Override via `host` only for self-hosted deployments:

```ts
AllStak.init({ apiKey: '...', host: 'https://allstak.mycorp.com' });
```

## Links

- Documentation: https://docs.allstak.sa
- Dashboard: https://app.allstak.sa
- Source: https://github.com/allstak-io/allstak-browser

## License

MIT © AllStak
