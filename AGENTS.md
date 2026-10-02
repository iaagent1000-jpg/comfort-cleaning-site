# AGENTS.md — Comfort Cleaning Website

## Project goal
Build a modern public website for Comfort Cleaning that is not only a marketing site, but also the entry point for the company's booking/assessment workflow.

Existing public site for reference:
https://www.comfort-cleaning-ie.com/

Do not modify the existing live website. This repository is for the new replacement/demo site.

## Core product rules
1. Mobile-first. The site must look excellent on iPhone-sized screens first, then tablet/desktop.
2. Keep Comfort Cleaning's recognisable visual identity: yellow, black and white, but modernise the layout, typography, spacing and components.
3. Do not repeat service prices manually across pages. Services/pricing must come from one central typed data source.
4. The future booking system has two customer journeys:
   - New customer -> Book an Assessment / manager visit.
   - Existing customer -> Book Cleaning.
5. For a new customer, the website must NOT promise final cleaning duration. The manager visits the property, assesses the work, decides required cleaning time, and then confirms the job/price with the customer.
6. The assessment request must eventually support: name, phone, email, address, Eircode, service(s), notes, preferred visit date/time, and optional photo upload.
7. Later tasks will connect submissions to Google Sheets / Make / manager notifications. Do not build that integration until explicitly requested.
8. Never commit passwords, API keys, webhook URLs, tokens, Google credentials or other secrets. Use environment variables and .env.example when integrations are added.
9. User-facing copy must be clear English suitable for customers in Ireland.
10. Use semantic HTML, accessible labels, keyboard-friendly controls, sensible contrast, and SEO-ready metadata.

## Engineering rules
- Stack: Next.js + TypeScript + Tailwind CSS.
- Prefer App Router.
- Keep components small and reusable.
- Put service/business data in a dedicated data layer, not inside page JSX.
- Avoid unnecessary dependencies.
- No placeholder lorem ipsum.
- No fake testimonials presented as real customer reviews.
- Before finishing a task, run lint/typecheck/build where available and report the result.
- Make focused changes for the requested task only. Do not jump ahead into later automation work.

## Planned milestones
1. Foundation + homepage.
2. Complete central service catalogue and service pages.
3. New-customer assessment flow.
4. Existing-customer booking flow.
5. Google Sheets / automation integration.
6. QA, SEO, accessibility and deployment.
