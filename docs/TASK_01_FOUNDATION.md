# TASK 01 — Meeting Demo (Foundation + Homepage + Services + Assessment Form)

## Deadline goal
Produce a polished demo that can be shown to the Comfort Cleaning owner tomorrow.

This task is intentionally broader than a normal foundation task because the immediate goal is a convincing owner-facing prototype, not a finished production system.

Do NOT build Google Sheets / Make / manager-panel integration yet. That comes after the owner approves the direction.

## Source of truth for this demo
Use:
1. AGENTS.md
2. docs/PROJECT_BRIEF.md
3. the existing website for business context: https://www.comfort-cleaning-ie.com/
4. the business workflow defined in the project brief

Do not invent awards, certifications, customer counts, testimonials or review scores.

Where prices on the old site are inconsistent, do not guess. Prefer wording like "from", "price confirmed after assessment", or omit the disputed exact value from prominent UI.

## What the owner should be able to see tomorrow
The demo should answer these questions immediately:
- Does the new site look clearly more modern than the current one?
- Can a customer understand the main services quickly?
- Can a new customer request a manager visit/assessment easily?
- Does the site reflect the real first-cleaning process?
- Does it look credible on an iPhone?

## 1. Scaffold
Create a production-ready Next.js project using:
- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint

Keep the repository root as the app root.

## 2. Project structure
Use a clean structure such as:
- app/
- components/
- components/layout/
- components/home/
- components/forms/
- data/
- types/
- public/

## 3. Visual direction
Retain the recognisable Comfort Cleaning identity:
- yellow
- black
- white / warm neutral backgrounds

Modernise it substantially:
- strong typography
- generous spacing
- clean service cards
- professional CTA hierarchy
- polished mobile navigation
- restrained use of yellow
- no template-like clutter

This must look owner-presentable, not like an unfinished developer starter.

## 4. Central services data
Create a typed service model and one central services data file.

Representative categories/services should include:
- Regular Cleaning
- Deep Cleaning
- Move In / Move Out Cleaning
- Post Construction Cleaning
- Kitchen Cleaning
- Bathroom Cleaning
- Upholstery Cleaning
- Carpet Cleaning
- Commercial Cleaning
- Window Cleaning
- Power Washing
- Car Interior Cleaning
- Handyman

Do not duplicate prices in JSX.

For the demo, only show exact prices when they are clearly reliable. Known examples from the current business material include:
- Deep Kitchen Cleaning: €265
- Deep Cleaning: €32/hour
- Move In / Move Out: €33/hour
- Post-Construction Cleaning: from €35/hour
- Handyman: from €80 for 1.5 hours
For any conflicting/unverified current price, prefer "From", "Quote", or no exact amount.

## 5. Header / navigation
Create:
- Comfort Cleaning brand area
- Home
- Services
- About
- Contact
- primary CTA: "Book an Assessment"

Mobile menu must be polished.

## 6. Homepage
Build a strong mobile-first homepage.

### Hero
Use a concise professional headline, for example:
"Professional Cleaning, Done Properly."

Supporting copy should explain that Comfort Cleaning serves homes and businesses around Gorey / Co. Wexford.

Primary CTA:
"Book an Assessment"

Secondary CTA:
"View Services"

### Trust/value strip
Only use credible general value points, e.g.:
- Residential & Commercial
- Professional Equipment
- Local Service
Do not invent statistics.

### Featured services
Use 6–8 modern cards sourced from central data.

### How it works
For NEW customers:
1. Tell us what you need
2. Choose a preferred assessment time
3. A manager visits the property
4. The work/time is confirmed and cleaning is scheduled

Make clear that the manager determines the required cleaning time on site.

### Why Comfort Cleaning
Short, credible section based on professionalism, range of services and local service.

### Assessment CTA
Explain the first-cleaning assessment clearly.

### Footer
Use verified contact details from the existing site where safe:
- Gorey, Co. Wexford
- comfort.cleaning.ie@gmail.com
- phone from the current website
Keep layout clean and editable from one place.

## 7. Services page
Create /services as a real demo page, not a placeholder.

Requirements:
- clear category grouping
- responsive cards/list
- services sourced from the central data file
- price/price-type displayed consistently
- no giant wall of checkboxes
- CTA from each logical section to assessment form

The purpose is to show the owner that all services can be organised much more clearly than on the existing site.

## 8. Book Assessment page — IMPORTANT
Create /book as a polished multi-step front-end assessment request demo for NEW customers.

This is NOT a final booking/cleaning-duration calculator.

### Step 1 — Service
Let customer select one or more service categories.

### Step 2 — Property/contact
Fields:
- Full name
- Phone
- Email
- Full address
- Eircode
- Notes / what needs cleaning

### Step 3 — Preferred manager visit
Fields:
- Preferred date
- Preferred time window

Use simple sensible time-window choices for the demo. Do not claim live availability yet.

### Step 4 — Review
Show a clean summary of the request.

### Demo submission
For this task, submission can be front-end only:
- validate required fields
- show a professional success/confirmation state
- explicitly state that real Google Sheets/Make delivery will be connected in a later task

Do NOT create fake backend success calls.

Confirmation copy should communicate:
"Request received. A manager will review your request and confirm the assessment visit."

## 9. About and Contact
Create visually complete lightweight pages:
- /about
- /contact

They should match the new design and not feel broken, but do not spend excessive time on them.

## 10. Mobile-first quality
Primary review width: iPhone/mobile.

Requirements:
- no horizontal overflow
- good tap targets
- readable typography
- accessible labels
- keyboard-friendly controls
- visible focus states
- semantic HTML
- no lorem ipsum
- no fake reviews
- no secrets
- sensible SEO metadata

## 11. Verification
Run:
- npm install
- npm run lint
- npm run build

Fix errors before finishing.

## 12. Completion report
At the end report:
1. what was created
2. routes available
3. how service data is structured
4. how the assessment flow works
5. what is intentionally deferred (Google Sheets / Make / real scheduling)
6. lint/build status
7. exact local run command

## Priority order if time is limited
1. Homepage quality
2. /book assessment experience
3. /services
4. mobile responsiveness
5. About/Contact polish

Do not spend time on advanced animation, authentication, dashboards or automation in this task.
