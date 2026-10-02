# Comfort Cleaning — Product Brief

## What we are building
A modern replacement/demo website for Comfort Cleaning in Ireland.

The current site contains useful business information, services and pricing, but the new site should be easier to use, mobile-friendly, visually stronger and built around a real operational workflow.

The main business advantage is not simply a redesign. The new website should eventually turn enquiries into structured requests that can flow into Google Sheets and the manager's workflow.

## Customer journeys

### A. New customer
The first cleaning requires an assessment.

Expected flow:
1. Customer chooses what kind of cleaning/service they need.
2. Customer gives contact information.
3. Customer gives full address and Eircode.
4. Customer chooses a preferred date/time window for a manager visit.
5. Customer can add notes and, later, photos.
6. Request is submitted.
7. Manager visits the property.
8. Manager decides the required work and estimated cleaning hours on site.
9. Manager confirms the job with the customer.

Important: hourly/fixed service rates can be shown where appropriate, but the website must not invent a final number of cleaning hours for a first-time property assessment.

### B. Existing customer
Later, returning customers should be able to request/book another cleaning without repeating a full assessment.

## Main navigation direction
- Home
- Services
- About
- Contact
- Book / Get a Quote

## Homepage direction
The homepage should feel like a professional Irish cleaning company, not a generic template.

Suggested structure:
1. Header + strong primary CTA
2. Hero section
3. Trust/value strip
4. Main service categories
5. How it works
6. Why choose Comfort Cleaning
7. Assessment CTA for new customers
8. Service area / contact
9. Footer

Primary CTA wording should favour:
- Book an Assessment
- Get a Quote

## Data architecture
All service content should be backed by one central data model.

A service record should be able to support fields such as:
- id
- slug
- name
- shortDescription
- fullDescription
- category
- pricingType (hourly / fixed / quote)
- price
- priceUnit
- minimumHours
- featured
- image
- active

Do not hard-code the same price into multiple components/pages.

## Visual direction
Retain the recognisable yellow / black / white brand language from the existing site, but use:
- more white space
- stronger hierarchy
- modern cards
- cleaner typography
- consistent buttons
- modern mobile navigation
- less visual clutter
- high-quality image treatment

The demo should look credible enough to show directly to the business owner.
