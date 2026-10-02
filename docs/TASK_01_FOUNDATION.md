# TASK 01 — Foundation + Homepage

## Goal
Create the technical foundation and a polished first version of the new Comfort Cleaning homepage.

Do NOT build the full booking automation in this task.

## Required work

### 1. Scaffold
Create a production-ready Next.js project using:
- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint

Keep the repository root as the app root.

### 2. Project structure
Create a clean structure along these lines:
- app/
- components/
- components/layout/
- components/home/
- data/
- types/
- public/

### 3. Brand/design foundation
Create reusable styling/tokens for the Comfort Cleaning identity:
- yellow
- black
- white / warm neutral backgrounds

The result must feel modern, premium and clean, not like a default Next.js template.

### 4. Central service data model
Create a typed service model and a single central services data file.

For Task 01:
- include representative service records/categories needed to render the homepage
- do not duplicate pricing in components
- if an exact current price is not verified, do not invent one
- structure the model so actual pricing can be completed in Task 02

Representative services/categories should cover the current business direction such as:
- Regular Cleaning
- Deep Cleaning
- Move In / Move Out Cleaning
- Post Construction Cleaning
- Kitchen / Bathroom Cleaning
- Upholstery / Carpet Cleaning
- Commercial Cleaning
- Window Cleaning
- Power Washing
- Car Interior Cleaning
- Handyman

The homepage does not need to display every service.

### 5. Header / navigation
Create:
- brand/logo area
- Home
- Services
- About
- Contact
- primary CTA: "Book an Assessment"

Mobile navigation must be polished and usable.

### 6. Homepage
Build a strong mobile-first homepage with these sections:

#### Hero
Suggested message direction:
"Professional Cleaning, Done Properly."
or another concise, credible variant.

Supporting copy should communicate professional cleaning services in Gorey / Co. Wexford without making unverified claims.

Primary CTA:
"Book an Assessment"

Secondary CTA:
"View Services"

#### Trust/value strip
Use factual/general value propositions only. Do not invent awards, certifications, customer counts or review scores.

#### Featured services
Modern responsive cards sourced from the central services data.

#### How it works
Make the new-customer process explicit:
1. Tell us what you need
2. Book a manager assessment
3. We assess the property and confirm the work
4. Cleaning is scheduled

#### Why choose us
Use restrained, credible copy. No fake statistics.

#### Assessment CTA
Explain that for a first cleaning, a manager can visit the property to understand the work and estimate the required time.

CTA: "Book an Assessment"

#### Footer
Include navigation/contact placeholders that are clearly structured for later replacement with verified business data.

### 7. Routes
Create placeholder-ready routes/pages so navigation does not dead-end:
- /
- /services
- /about
- /contact
- /book

For Task 01, non-home pages can be simple but visually consistent shells. Do not build the full booking form yet.

### 8. Quality
- responsive on mobile/desktop
- semantic HTML
- no horizontal overflow
- accessible button/link states
- no lorem ipsum
- no fake reviews
- no secrets
- sensible SEO metadata
- clean TypeScript

### 9. Verification
Run:
- npm install
- npm run lint
- npm run build

Fix errors before finishing.

## Completion report
At the end, report:
1. files/structure created
2. design decisions
3. what is intentionally deferred to Task 02
4. lint/build status
5. exact command to run the site locally
