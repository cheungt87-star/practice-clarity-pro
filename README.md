# SuperGP Marketing Site

Next.js marketing site for [supergpapp.co.uk](https://www.supergpapp.co.uk).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env` for local testing:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: Formspree endpoint for demo bookings (e.g. `https://formspree.io/f/abc123xy`)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics 4 measurement ID (optional)
- `NEXT_PUBLIC_GSC_VERIFICATION`: Google Search Console verification token (optional)

Set the same variables in Vercel for production.

## Contact Form (Formspree)

The demo form submits directly to Formspree from the frontend.

1. Create a form in Formspree.
2. Set the notification destination to your inbox (e.g. `info@supergpapp.co.uk`).
3. Copy your form endpoint into `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
4. Redeploy after setting the environment variable in Vercel.

## SEO

- Sitemap: `/sitemap.xml` — homepage, pricing, privacy, `/features/*`, `/for/*`, `/compare/*`, and `/about`
- Robots: `/robots.txt`
- Structured data: Organization + SoftwareApplication on homepage; page-level FAQ / SoftwareApplication / Person on content pages
- `/contact` ships real content but stays `noindex` (intentional — not a ranking target)
