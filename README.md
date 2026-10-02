# Comfort Cleaning — Demo v1

Premium mobile-first website and new-customer assessment flow for Comfort Cleaning in Gorey, County Wexford.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Submission integration

Assessment requests are validated by `POST /api/assessment` and forwarded server-side to `ASSESSMENT_WEBHOOK_URL`. The optional `ASSESSMENT_WEBHOOK_SECRET` is sent as a bearer token and is never exposed to the browser.

Without a configured endpoint, production responds with a clear `503` configuration error. For local UI testing only, set `ASSESSMENT_DEV_MODE=true`; this validates the request and returns a development-mode reference without pretending an external delivery occurred.
Modern website and booking automation
