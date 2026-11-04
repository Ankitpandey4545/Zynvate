# ZYNOVATE

Marketing website for ZYNOVATE — **Build. Launch. Evolve.**

A full handbook for running, editing and publishing the site is supplied with this package as `docs/ZYNOVATE-Website-Handoff.docx`.

The site presents the company, its services, products and selected work, and gives visitors a way to start a project. It is a frontend application: there is no backend and no database. Enquiry forms check the fields in the browser, then open a Gmail compose window with the message filled in and addressed to the studio. Nothing from a form is stored on a server. Email addresses shown on the site are ordinary `mailto:` links.

## Stack

Next.js (App Router), React and TypeScript, styled with Tailwind CSS v4. Scroll animation uses GSAP, with Locomotive Scroll for smooth scrolling on desktop. Deploy it as a Next.js app on Vercel.

## Requirements

Node.js 20 or newer, and npm.

## Scripts

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm test         # unit tests
```

`npm run lint` and `npm run format` are available. The production build does not depend on them.

## Public routes

| Page | Route |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Services | `/services` and `/services/[slug]` |
| Products | `/products` and `/products/[slug]` |
| Works | `/works` |
| Amrut.ai case study | `/works/amrut-ai` |
| Contact | `/contact` |
| Privacy policy | `/privacy-policy` |
| Terms and conditions | `/terms-and-conditions` |

## Where content lives

Copy, links and image references live in `src/data/*.ts`. Components render that data. To change what the site says or which images it shows, edit the data files and leave the components alone.

| What to change | File |
| --- | --- |
| Name, tagline, navigation, hero, SEO description | `src/data/site.ts` |
| About | `src/data/about.ts` |
| About values | `src/data/values.ts` |
| Services (summaries) | `src/data/services.ts` |
| Products (summaries) | `src/data/products.ts` |
| Service and product detail pages | `src/data/detailPages.ts` |
| Product screen mockups | `src/data/productScreens.ts` |
| Route hero visuals | `src/data/pageVisuals.ts` |
| Technologies | `src/data/technologies.ts` |
| Featured work and Amrut.ai case study | `src/data/projects.ts` |
| Works gallery | `src/data/works.ts` |
| Why ZYNOVATE | `src/data/whyUs.ts` |
| Process | `src/data/process.ts` |
| Industries | `src/data/industries.ts` |
| Testimonials | `src/data/testimonials.ts` |
| FAQ | `src/data/faqs.ts` |
| Closing banner | `src/data/cta.ts` |
| Contact details and form labels | `src/data/contact.ts` |
| Social links | `src/data/social.ts` |
| Team | `src/data/team.ts` |
| Privacy policy | `src/data/privacy.ts` |
| Terms and conditions | `src/data/terms.ts` |
| Image paths, sizes and alt text | `src/data/images.ts` |
| Parallax closer images | `src/data/parallax.ts` |

## How to replace content

### Logo and favicon

1. Replace `public/brand/zynovate-logo.png`. A transparent PNG works best.
2. Set `logo.width` and `logo.height` in `src/data/site.ts` to the new file’s pixel size.
3. Replace `public/favicon.png` with a square mark (64×64 or larger). The Apple touch icon uses the logo file (`src/app/layout.tsx`).

### Screenshots and photography

Case-study images live in `public/projects/amrut/` and are registered under `images.amrut` in `src/data/images.ts`. For each image, keep the file name or update `src`, set `width` and `height` to the real pixel size, and write an `alt` that describes the screen.

These files are already wired up:

- `home-hero.png`
- `dashboard-ai-visibility.png`
- `llms-txt-generator.png`
- `about-page.png`
- `tools-grid.png`
- `mobile-home.png`
- `ai-engines-strip.png`

Optional extra screenshots: add the file under `public/projects/amrut/`, add an entry to `images.amrut`, then point a feature group or `screenshots` field at it from `src/data/projects.ts`.

Hero, Why, CTA, Open Graph and industry photographs live under `public/photos` and are marked `isPlaceholder: true`. Replace them with photography you have the right to use. The About story photograph is `src/assets/about-studio.jpg`, referenced from `src/data/about.ts`.

`public/cta-zoom/meeting.jpg` is the background frame in the closing scene. `public/cta-zoom/foreground.webp` is still marked as a placeholder in `images.ctaZoom.foreground`.

### Projects

Edit `src/data/projects.ts`. The first project without `isPlaceholder` is the featured case study (currently Amrut.ai at `/works/amrut-ai`). Entries with `isPlaceholder: true` render as “Coming soon” cards. Remove that flag only when the project is real and you have permission to show it.

The Works gallery is `src/data/works.ts`. Amrut.ai is the live item. Other category cards are references until further projects are added. Gallery “View project” opens the case study; “Visit site” opens the live product.

### Contact details

Edit `src/data/contact.ts`: `email`, `phone`, `location`, project types and budget ranges. These details are currently live (`info@zynovate.in`, Noida Sector 2 B-10) and are included in structured data. Set `isPlaceholder: true` only if you need the on-page placeholder notice.

The form opens Gmail in a new tab, addressed to `contact.email`. Header, footer and team email links use `mailto:`.

### Social links

Edit `src/data/social.ts`. Instagram, Facebook and LinkedIn are currently live. Placeholder links render as plain text, and they are left out of structured data.

### Testimonials

Edit `src/data/testimonials.ts`. Replace each quote and role (include a name only with that person’s consent) and remove `isPlaceholder`. Update `testimonialsIntro` so the description matches the real quotes. When none of the entries are placeholders, the section heading switches to “Notes from clients.”

### Team

Edit `src/data/team.ts`. Portraits live in `public/team/`.

### Colors

Color tokens are in `src/styles.css` under `:root`: `--cream`, `--brown`, `--espresso`, `--clay`, `--clay-light`, `--sand`, `--blush`, `--taupe`. Change the palette there. Keep body text at a contrast of 4.5:1 or better. The palette is warm brown; it does not use gold, amber or yellow except where a technology brand mark or a social network’s own color requires it.

### Fonts

Fonts load through `next/font` in `src/app/layout.tsx` and are self-hosted at build time:

- **Mona Sans** (variable weight and width, normal and italic) → `--font-mona`, used for `font-sans` and `font-display`
- **JetBrains Mono** (weights 400 and 500) → `--font-jetbrains`, used for `font-mono`

Those CSS variables are mapped at the top of `src/styles.css`. To change a font, swap the import in `layout.tsx` and keep the same `variable` name, or update the `--font-*` tokens in `src/styles.css`.

## Deployment

Deploy on Vercel with:

- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Output Directory: leave empty

`vercel.json` sets `"framework": "nextjs"`.

Set the production origin before going live. `NEXT_PUBLIC_SITE_URL` is the canonical URL used for metadata and structured data. If it is unset, `src/data/site.ts` falls back to `https://zynovate.in`.

`public/robots.txt` and `public/sitemap.xml` are static files and still point at `https://www.example.com`. Replace that placeholder with the production domain in both files. The sitemap currently lists the homepage only; add the other public routes if you want them included.

## Launch checklist

- [ ] Written permission to show Amrut.ai, its name and screenshots as ZYNOVATE work
- [ ] Optional extra Amrut.ai screenshots added under `public/projects/amrut/` and registered in `src/data/images.ts`
- [ ] Further case studies added in `src/data/projects.ts` and `src/data/works.ts` when they are ready
- [ ] Contact details in `src/data/contact.ts` confirmed
- [ ] Social profile URLs in `src/data/social.ts` confirmed
- [ ] Real testimonials, with consent, in `src/data/testimonials.ts`
- [ ] Photography under `public/photos` replaced, and `isPlaceholder` removed
- [ ] Parallax layers in `public/parallax/` replaced
- [ ] Production domain set in `NEXT_PUBLIC_SITE_URL`, `public/robots.txt` and `public/sitemap.xml`
- [ ] Privacy policy and terms and conditions reviewed

## Project map

```
src/app/                 routes, metadata and fonts
  layout.tsx             site metadata, favicon, Mona Sans and JetBrains Mono
  page.tsx               home page and organization structured data
  about/                 about
  services/              services index and services/[slug]
  products/              products index and products/[slug]
  works/                 works index and works/[slug] case study
  contact/               contact
  privacy-policy/        privacy policy
  terms-and-conditions/  terms and conditions
  error.tsx              route error
  global-error.tsx       root error
  not-found.tsx          404
src/components/
  home/HomePage.tsx      home section order
  sections/              one file per section
  layout/                navbar, footer, site shell, cookie notice, inquiry window
  mockups/               laptop, phone and browser frames
  motion/                smooth scroll and related motion
  ui/                    shared interface components
src/data/                copy, links and image references
src/assets/              about-studio photograph
public/
  brand/                 logo
  projects/amrut/        case-study screenshots
  photos/                section photography
  parallax/              closer-scene layers
  team/                  portraits
  tech/                  technology marks
  cta-zoom/              closing-scene frames
  favicon.png
  robots.txt
  sitemap.xml
```

Pinned scroll scenes run on a fine pointer, a viewport at least 1024px wide, and when the visitor has not asked for reduced motion. On smaller screens, touch devices and reduced motion, the same content is shown in a normal stacked layout. Smooth scrolling is off in those cases as well.
