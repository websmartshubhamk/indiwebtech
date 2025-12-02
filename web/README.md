# IndieWebTech — Web

Next.js App Router + TypeScript + Tailwind (v4) marketing site scaffold with services, portfolio, blog, and contact flows.

## Run locally

```bash
npm install
npm run dev
```

- App runs at http://localhost:3000
- Lint: `npm run lint`
- Build: `npm run build`

## Structure

- `app/` — routes and layouts (home, services, portfolio, blog, contact, legal, 404)
- `components/` — UI primitives (buttons, layout, sections, contact form)
- `content/` — structured data for nav, services, case studies, blog posts, testimonials
- `app/actions/lead.ts` — server action stub for form handling (logs submissions for now)
- `public/` — static assets (favicons, OG image to be added)

## Notes

- Design is dark, gradient-forward with CTA emphasis; update `app/globals.css` for tokens.
- Contact form uses a server action to validate and log; wire to email/notification service as needed.
- Blog detail pages currently use placeholder copy—swap in MDX/content files as real posts arrive.
- Update `metadataBase` in `app/layout.tsx` once the production domain is set.
