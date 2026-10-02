# CODEX PROMPT — Build Demo v1

Work only in repository `iaagent1000-jpg/comfort-cleaning-site`.

Before changing code, read in full:
1. `AGENTS.md`
2. `docs/PROJECT_BRIEF.md`
3. `docs/MASTER_SPEC.md`

Then implement the first complete owner-facing demo described in MASTER_SPEC.

Important execution rules:
- Do not redesign the business logic from your own assumptions.
- Treat MASTER_SPEC as product requirements.
- Preserve the service catalogue/pricing baseline in ONE central typed data source.
- Build a premium, cinematic, animated business website: subtle continuous motion in hero/background, scroll reveals, interactive service cards, smooth transitions, polished mobile menu and CTA micro-interactions.
- Motion must remain professional, performant, accessible and reduced-motion aware.
- Do not create a static yellow template.
- Do not use lorem ipsum or fake reviews/statistics.
- New customers must use the manager-assessment flow. Do not invent cleaning duration.
- Build the full front-end assessment wizard.
- Build a real server-side submission API adapter that posts to a backend URL from environment variables. Do not expose secrets client-side and do not fake successful production submissions.
- Add `.env.example` documenting required integration variables.
- If the actual webhook/Google Apps Script URL is not present, make the site fully buildable and the form clearly return a configuration error in production rather than pretending success.
- Keep integration code isolated so we can connect Google Sheets/Make in the next step without changing the UI.
- Use Next.js App Router + TypeScript + Tailwind CSS.
- You may add a lightweight animation library such as Motion/Framer Motion if justified.
- Reuse or reference Comfort Cleaning's own public visual assets where technically practical; do not hotlink fragile third-party stock assets as a core dependency.
- Ensure the demo looks excellent at iPhone widths.

Build these usable routes:
- /
- /services
- /services/[slug] or equivalent data-driven service detail
- /book
- /about
- /contact

Before finishing:
- run npm install
- run lint
- run typecheck if configured
- run build
- fix errors

Then give a concise completion report containing:
1. routes built
2. main visual/motion features
3. service data structure
4. assessment wizard flow
5. submission API contract and exact environment variables still needed
6. lint/build results
7. exact local run command

Do not spend time on authentication, admin dashboards or advanced manager scheduling in this task.


SEO / AI DISCOVERY REQUIREMENT:
Implement the Search / AI discovery strategy from MASTER_SPEC as part of this build. Important service information must remain crawlable and present as real text in the rendered pages, not only inside animated UI. Add route metadata, sitemap, robots, canonical handling, internal linking, and valid LocalBusiness/Organization JSON-LD using only verified business data. Do not keyword-stuff or generate thin location pages.


CONTENT MANAGEMENT / FUTURE-PROOFING:
- Do not hard-code editable business copy, prices, contacts or image paths throughout components.
- Create a clear central content/config layer and service catalogue.
- Structure components so we can replace the local content source with a CMS later without rewriting the UI.
- Do NOT spend time building a custom admin/auth dashboard in this demo.
- Codex is a development tool only; the deployed site must have no runtime dependency on Codex/OpenAI.
- For current owned images used in the demo, prefer reliable local project assets over hotlinking the old site.
