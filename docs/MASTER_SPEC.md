# Comfort Cleaning Website — Master Specification (Demo v1)

## Objective
Build a premium, highly modern website for Comfort Cleaning that clearly looks like a serious established company, while preserving the real services, prices and booking intent of the current website.

The website must feel alive. It should not be a static yellow page. Motion should guide the visitor through the story of the company: animated hero, subtle moving background layers, scroll reveals, parallax/transform effects, service-card motion, smooth section transitions and polished micro-interactions.

The motion must remain professional, fast and usable. Think "cinematic premium business website", not a game or distracting animation demo.

## Deadline
A convincing working demo must be ready to show the owner tomorrow.

## Existing business source
Current website:
https://www.comfort-cleaning-ie.com/

Use it as the business/content reference. Do not modify the live website.

## Design direction
Brand:
- Comfort Cleaning
- retain yellow + black + white identity
- modern premium typography
- strong white space
- dark sections may be used for contrast
- yellow should feel intentional, not like a full-page flat background

Experience:
- mobile-first
- cinematic hero with continuous subtle motion
- smooth scroll-linked section reveals
- animated service cards
- visual depth (gradients, soft shapes, light/shadow, layered imagery)
- polished sticky header
- premium mobile menu
- smooth CTA interactions
- avoid excessive bouncing, flashing or distracting effects
- honor prefers-reduced-motion

Suggested motion tools:
- CSS transitions/animations for lightweight effects
- Motion / Framer Motion only where it adds clear value
- no heavy 3D/WebGL unless there is a strong reason and performance remains excellent

## Core pages for Demo v1
1. Home
2. Services
3. Service detail pages (data-driven)
4. Book / Request Assessment
5. About
6. Contact

## Homepage structure
1. Sticky header
2. Cinematic hero
   - professional cleaning imagery
   - moving layered background / subtle parallax
   - headline
   - service area
   - primary CTA: Book an Assessment
   - secondary CTA: Explore Services
3. Scrolling trust/value strip
4. Featured residential services
5. Featured commercial services
6. Interactive "How it works"
7. Specialist services section
8. Why Comfort Cleaning
9. Service area
10. Strong assessment CTA
11. Footer

## Customer flow
### New customer
New customers do NOT receive an invented final duration online.

Flow:
1. Choose service(s)
2. Enter name
3. Enter phone
4. Enter email
5. Enter full address
6. Enter Eircode
7. Add notes
8. Optional photo upload (UI and data structure prepared)
9. Choose preferred manager visit date
10. Choose preferred time window
11. Review request
12. Submit
13. Manager receives structured request
14. Manager visits property
15. Manager determines required cleaning time on site
16. Cleaning is confirmed/scheduled

Customer-facing wording must explain that the first visit lets the manager assess the work and confirm the required cleaning time.

### Existing customer
Prepare architecture/UI entry point for:
"Existing customer — Book Cleaning"
but the complete returning-customer logic may be implemented after the first demo.

## Service data architecture
All services and prices must live in ONE central typed data source.
Never duplicate the same price in page components or form logic.

Service model should support:
- id
- slug
- name
- category
- shortDescription
- fullDescription
- pricingType
- price
- priceMin
- priceMax
- priceUnit
- minimumHours
- options[]
- featured
- image
- active
- assessmentRequired

## Current service catalogue / pricing baseline
Use the current public site and current order form as source. Preserve all visible services and prices in the demo, while storing them centrally so the owner can change them later.

### House cleaning
- Regular Cleaning — €28.50/hour (current service page); minimum 3 hours
- Deep Cleaning — €32/hour
- Express Cleaning — €140
- Move In / Move Out — €33/hour

### Commercial / specialist
- Post-Construction Cleaning — from €35/hour
- School & Accommodation Cleaning — from €28/hour
- Restaurant & Kitchen Cleaning — from €35/hour
- Factories & Offices Cleaning — from €28/hour
- Nursing Home Cleaning — from €28/hour
- Warehouse Cleaning — from €28/hour

### Kitchen
- Deep Kitchen Cleaning — €265
- One oven — €70
- Two ovens — €95
- Microwave — €15
- Gas hob — €32
- Electric hob — €15
- Extractor fan — €35
- Fridge cleaning — €70

### Bathroom
- Bathroom with shower OR bath deep clean — €90
- Bathroom with shower AND bath deep clean — €100
- 2 Bathrooms Deep Cleaning — €180
- 3 Bathrooms Deep Cleaning — €250
- Shower cabin deep clean — €70
- Small toilet/WC — €50
- Remove old silicone and reseal bath/shower/sink — €95

### Car interior / valeting
Current order-form baseline:
- Standard — €100
- SUV/Jeep — €120
The main site also shows Basic/Standard/Premium variants with inconsistent values. Treat the order-form selections as the demo booking baseline unless owner changes them.

### Upholstery
Sofas:
- 2-seater — from €50–80
- 3-seater — from €70–120
- 4-seater — from €90–140
- 5-seater — from €120–180
Other:
- Chair — from €5–15
- Armchair — from €20–50

### Mattress
- Single — from €40–60
- Double — from €60–100
- King — from €100–120

### Carpet
Use the current service page as the preferred public baseline:
- Rug — from €35
- One bedroom — from €65
- Sitting room — from €75
- Stairs & landing — from €79

### Power washing
The current pages contain inconsistent values (€35/hour, text mentioning €40, order form €45/hour).
For the demo booking catalogue, use the CURRENT ORDER FORM baseline:
- Power Washing — €45/hour
Mark this centrally so it can be changed in one place after owner confirmation.

### Window cleaning
Current main-site public list:
- Interior window — €8
- Exterior window — €8
- Interior + Exterior — €13
- Blind + interior window — €35 per blind
- Exterior after renovation — €20
- Interior after renovation — €20
The existing order form also has a coarse "Windows inside Cleaning €35" option. Prefer the detailed public service list in the modern service catalogue; the booking UI may offer a quote/assessment path if ambiguity exists.

### Handyman
- from €80 for 1.5 hours

### Ironing
- from €1 per item

## Booking UX
Do NOT reproduce the current giant checkbox wall.

Use progressive selection:
1. Category
2. Service/options
3. Customer/property details
4. Preferred assessment visit
5. Review
6. Submit

Show selected services clearly and preserve entered state across steps.

## Real submission requirement
The final demo must submit real structured requests, not just show a fake success message.

Architecture:
- Frontend submits to a server-side API route.
- API validates payload.
- API forwards to a configurable backend endpoint / Google Apps Script / Make webhook.
- Endpoint URL and secrets must come from environment variables.
- Never expose webhook secrets in browser code.
- On real success, show request reference and confirmation.
- On failure, show a clear retry/error state.
- Add a safe development mode only for local testing; production must not silently pretend to submit.

Payload should include at least:
- requestId
- createdAt
- source = website
- customerType = new/existing
- name
- phone
- email
- address
- eircode
- selectedServices[]
- notes
- preferredAssessmentDate
- preferredAssessmentWindow
- photos metadata/URLs when enabled
- consent flags if needed

## Integration target
For the first live demo, target:
Website -> server API -> Google Sheets / Make-compatible webhook -> structured row/request -> manager notification.

Do not connect directly to the existing manager repository until the contract/payload is explicit and tested. Keep the integration adapter isolated.

## Contact details baseline
- Gorey, Co. Wexford
- phone: +353 87 343 9698
- email: comfort.cleaning.ie@gmail.com
- service radius: about 30 km around Gorey

## Quality rules
- mobile-first; primary demo target is iPhone
- fast initial load
- no horizontal overflow
- accessible semantic markup
- keyboard friendly
- visible focus states
- reduced-motion support
- no lorem ipsum
- no fake testimonials
- no fake awards/statistics
- no secrets committed
- central business config
- central service/pricing data
- lint/build must pass

## Definition of done for tomorrow's demo
The owner can:
1. open the demo URL on phone
2. immediately see a premium animated redesign
3. browse all main service categories and prices
4. open service detail content
5. start a new-customer assessment request
6. select services
7. enter address/Eircode/contact info
8. choose preferred manager visit date/time
9. review and submit
10. the request reaches the real configured backend/Sheet once integration credentials are supplied

## After owner feedback
Adjust:
- services/prices
- copy
- images
- animations
- exact form fields
- returning-customer flow
- manager integration
without redesigning the architecture.

## Search / AI discovery strategy (2026)
The site must be built for both classic Google Search and modern generative/AI search experiences. Do NOT use obsolete keyword-stuffing tactics and do NOT create thin pages only to target query variations.

### Core principle
Write for people first, but structure the site so search engines and AI systems can clearly understand:
- who Comfort Cleaning is
- where it operates
- which services it provides
- how each service works
- what the current price/pricing model is
- when a manager assessment is needed
- how a customer can request service

### Content requirements
Each important service must have a substantial, useful, human-readable service page generated from the central data source. The page should answer real customer questions such as:
- what the service includes
- who it is for
- how the process works
- what affects price or duration
- whether assessment is required
- areas served
- how to request an assessment

Avoid generic filler. Prefer specific, local, operational information based on the real business.

### Local relevance
Naturally mention the real service area where relevant, including Gorey and County Wexford. Do not create dozens of near-duplicate town pages just to manipulate rankings. If additional area pages are created later, each must contain genuinely useful, unique local information.

### Technical SEO
Implement:
- unique title and meta description for every important route
- canonical URLs
- sitemap.xml
- robots.txt
- Open Graph metadata
- semantic headings and HTML
- crawlable text content (do not hide important service copy only inside animations)
- descriptive internal links between Home, Services, service detail pages, About, Contact and Book
- descriptive image alt text where appropriate
- fast mobile performance

### Structured data
Add valid JSON-LD where appropriate:
- LocalBusiness / the most suitable available subtype
- Organization properties where applicable
- Service data where appropriate and supported
- BreadcrumbList for service detail pages if useful

Use only real verified business data. Do not fabricate ratings, reviews, opening hours, awards or addresses.

### AI / generative search
Do not add fake "AI optimization" hacks. No keyword stuffing, hidden text, mass-generated low-value pages, or special llms.txt dependency for Google Search.

Make content easy to understand and quote by:
- clear headings
- direct answers
- explicit service names
- explicit locations
- concise summaries followed by deeper detail
- useful real-world process information
- consistent business identity and contact data

### Search Console readiness
Prepare the site so it can later be verified in Google Search Console, submitted via sitemap and monitored for both normal Search and generative AI search performance.

### Ranking expectations
Never claim or imply that these changes guarantee first place in Google. The goal is to give the site the strongest technically sound and content-rich foundation possible while preserving the business's existing local search equity when migrated.
