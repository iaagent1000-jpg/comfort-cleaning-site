# TASK 02 — Service Images + Social Links + Mobile Polish

## Goal
Improve the owner-facing demo before public preview deployment.

## First
Pull the latest `origin/main` because the assessment form/schema was updated outside the local Codex session:
- full street address was removed
- Eircode is now the only location field

Do not overwrite those changes.

## Service imagery
Replace the current one-image-for-all-services approach.

Requirements:
- each major service/category must have a relevant image
- prefer Comfort Cleaning-owned/current-site images where appropriate
- copy/download approved assets into `public/images/services/`
- do not permanently hotlink the old site
- keep image paths centrally in `data/services.ts`
- use Next/Image and meaningful alt text
- use sensible responsive crops
- do not invent images that misrepresent a service

At minimum give distinct visuals to:
- Regular Cleaning
- Deep Cleaning
- Move In / Move Out
- Post-Construction Cleaning
- Commercial / Office Cleaning
- Kitchen Cleaning
- Bathroom Cleaning
- Upholstery / Sofa Cleaning
- Carpet / Rug Cleaning
- Mattress Cleaning
- Car Interior / Valeting
- Window Cleaning
- Power Washing
- Handyman
- Ironing

## Social links
Add a central social config in `data/content.ts`.

Support:
- WhatsApp
- Facebook
- Instagram
- TikTok
- Messenger (optional)

Rules:
- WhatsApp may use the verified business phone +353 87 343 9698.
- Do not invent Facebook/Instagram/TikTok/Messenger profile URLs.
- If exact URLs can be verified from the current public site or provided business data, configure them.
- Otherwise keep those entries disabled/hidden until supplied.
- Render enabled social links in footer/contact.
- On mobile add restrained quick-contact actions for Call and WhatsApp only; do not recreate the old oversized floating icon stack.

## Mobile polish
Review the site at iPhone width:
- service cards should show image + service name + price clearly
- no layout overflow
- image crops should look intentional
- social/contact controls should not cover content
- keep the cinematic motion performant

## Verification
Run:
- npm install if needed
- npm run typecheck
- npm run build

Fix errors.

## Finish
Commit and push to `origin/main`.
Report:
1. image assets added
2. social links enabled vs awaiting verified URLs
3. mobile fixes
4. build/typecheck result
5. commit SHA
