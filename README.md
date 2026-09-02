# Website

One-page site for done-for-you lead response and AI phone answering. Astro +
Tailwind v4, static output, no frontend framework. Vertical-neutral by design.

## Running it

```bash
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
npm run preview # serve the built dist/ locally
```

## What this page is actually for

Traffic arrives from cold email, not search. That means the page is **not** doing
the persuading — the email already did. A visitor clicks to answer one question:

> Is this a real company, or is someone phishing me?

Everything follows from that. The page is built to look legitimate, explain the
thing plainly, and **match whatever the email promised**. A page that contradicts
your email does more damage than no page at all, because it converts a warm reader
into a suspicious one.

Practical consequences:

- **Keep the site and the email in sync.** If you change the offer in your Instantly
  sequences, change `commercials` and `founding` in `site.ts` the same day.
- **SEO barely matters here**, but the `seo` block still controls the link preview
  card when someone pastes your URL into Slack or WhatsApp. A link with no preview
  card looks more like spam, so fill it in.
- **The first FAQ answers "you emailed me out of the blue, who are you?"** directly.
  Do not delete it. It is the single most relevant question your actual traffic has.

## Where to edit things

**All copy lives in one file: [`src/data/site.ts`](src/data/site.ts).** Search for
`TODO` — that is your pre-launch checklist.

| I want to change...       | Go to                                                  |
| ------------------------- | ------------------------------------------------------ |
| Any text, FAQ, transcript | `src/data/site.ts`                                     |
| Brand colors and fonts    | `src/styles/global.css` (the `@theme` block at the top) |
| Section order             | `src/pages/index.astro`                                |
| A section's layout        | `src/components/<Name>.astro`                          |

## Selling without proof

You have no clients and no public demo line, so the two normal ways to convince a
stranger are unavailable. Three things stand in. Do not break these.

**1. The calculator** (`Calculator.astro`) — the visitor enters their own missed
calls, close rate, and customer value, and sees the annual leak. Nothing to defend,
because it is their arithmetic about their business. The CTA carries their figures
into the email, so your first reply already knows their volume and deal size.

Defaults (`calculator.inputs`) are conservative on purpose: 5 missed calls/week,
30% close, $1,200/customer → about $93,600. Resist inflating them.

**2. The transcript** (`SampleCall.astro`) — answers the objection that actually
kills this sale: *does it sound like a robot?* It is currently industry-neutral so
it does not clash with whichever list you are emailing.

**Replace it with a real test call.** A genuine transcript with its awkward moments
left in beats a polished invented one; people can tell. And if you run campaigns
one industry at a time, swapping this to match that industry is the highest-value
edit available to you — see below.

**3. The early-access offer** (`Commercials.astro`) — turns "I'm new" into a reason
to move now. It only works if you honor it.

There are deliberately **no testimonials and no case studies** in this codebase. Do
not add them until they are real. Fabricated proof is illegal advertising in most
markets and the fastest way to lose a deal in diligence.

## Before you promise "your price never goes up"

The commercial terms currently say early-access pricing, locked permanently. That
matches the offer you are pitching, but there is a trap in it worth understanding
before your first client signs.

**AI voice bills you per minute, every month, forever.** A permanent flat price
against unlimited usage means a client whose call volume triples becomes a
permanent loss you cannot exit. The same is true of a one-time "lifetime" payment:
month 13 onward, you are paying to keep them.

The fix costs you almost nothing in persuasiveness: **lock the rate, not unlimited
usage.** "Your price is locked permanently, and includes up to N minutes a month"
delivers the same emotional promise and caps the downside. There is a `TODO` at
that line in `site.ts`. Work out your per-minute cost before you fill it in.

## Pricing display

`showStartingPrice` is `false`, so the site explains the *shape* of the deal
without naming a number — correct while you do not know your costs, and it still
answers the buyer's real anxiety ("am I about to be quoted five thousand dollars?").

When you know your numbers: set `showStartingPrice = true` and fill in
`startingPrice`. That is the only change needed.

## Before you launch

- [ ] Replace every `TODO` in `src/data/site.ts` — start with the business name
- [ ] Real email, phone, and `phoneRaw` (digits only, powers tap-to-call)
- [ ] Real domain in `astro.config.mjs`, `company.domain`, and `public/robots.txt`
- [ ] **Replace the sample transcript with a real test call**
- [ ] Rewrite `about.body` in your own voice — it is a `TODO` placeholder right now,
      and it is where a cold-email reader decides you are a real person
- [ ] Decide the usage band behind the price-lock promise (see above)
- [ ] Check the services list matches what you can actually deliver this month
- [ ] Logo: replace the letter tile in `Header.astro` and `Footer.astro`
- [ ] Favicon at `public/favicon.svg`, share image at `public/og-image.png` (1200×630)
- [ ] Privacy and terms pages — the footer links to `/privacy` and `/terms` and both
      are currently 404s. A privacy policy is close to mandatory for a business
      sending cold email, and it is a trust signal for exactly this traffic

## Cold email specifics

**Do not send from your main domain.** Buy a few lookalike domains for Instantly to
send from and point them at this site. If a sending domain gets burned — and at
volume, some will — your real domain's reputation survives. This is standard
practice and the single most expensive mistake to make late.

**Match the landing page to the campaign.** Astro makes per-industry variants cheap:
copy `src/pages/index.astro` to `src/pages/dental.astro`, override the transcript
and hero, and link that URL from that campaign. Same site, same components, one
extra file each. Say the word and I will wire it up so the vertical is a single
config value rather than a duplicated page.

**Call recording consent.** The site promises clients transcripts and recordings.
About a dozen US states require *all* parties to consent, not just one. The standard
fix is a spoken notice at the start of the call. Sort this before your first client.

**Medical callers.** The FAQ deliberately flags that clinics and med spas need
handling separately — patient information puts you in HIPAA scope and you would
need a BAA from whichever voice platform you resell. Most budget providers will not
sign one. Not a reason to avoid the market forever, but a reason not to stumble
into it because a med spa happened to reply.

## Getting a domain and deploying to Vercel

Do these in order. Total time is about 30 minutes, most of it waiting.

### 1. Pick a domain name

`simpletech.com` is almost certainly taken — SimpleTech was a real US storage
company in the 2000s, so the name has history. That is not a problem for you (you
are in a completely different business), but it does mean the obvious `.com` is
gone. Good alternatives, in rough order of preference:

- `trysimpletech.com` / `getsimpletech.com` / `usesimpletech.com` — the standard
  workaround, reads fine in an email signature
- `simpletech.io` or `simpletech.co` — short, and nobody thinks twice about them
- `simpletech.ai` — apt for what you sell, but expect roughly $70–100/year versus
  $10–20 for the others

Nobody is typing your name into a browser — your traffic is a link. So optimise for
"looks legitimate in an email", not for memorability.

### 2. Buy it

**Simplest: buy it inside Vercel.** Dashboard → **Domains** → search → buy. Vercel
configures DNS and SSL automatically, so there is nothing to wire up afterwards.
Costs a few dollars more per year than buying elsewhere.

**Cheapest: Cloudflare Registrar** (sells at cost, ~$10/year for a `.com`, no
upsells or renewal price hikes). You then point it at Vercel manually in step 5.
Worth it if you plan to own several sending domains later, which you will.

Either is fine. If you want to be done fastest, buy in Vercel.

### 3. Put the code on GitHub

```bash
git init
git add -A
git commit -m "Initial site"
```

Create an empty repo at <https://github.com/new> (private is fine), then:

```bash
git remote add origin https://github.com/<you>/<repo>.git
git branch -M main
git push -u origin main
```

You can skip GitHub and run `npx vercel` from this folder instead — but then every
future update is a manual command. With GitHub connected, `git push` redeploys the
site by itself.

### 4. Deploy

<https://vercel.com/new> → **Import** your repo → **Deploy**.

Vercel detects Astro on its own. You should not need to change the build command
(`npm run build`) or output directory (`dist`) — if the form is pre-filled with
those, it is correct. First deploy takes about a minute and gives you a live URL
like `simpletech.vercel.app`.

That URL already works. You can send it to people today, before any domain exists.

### 5. Attach the domain

Project → **Settings** → **Domains** → add your domain.

- Bought through Vercel: it connects itself, nothing to do.
- Bought elsewhere: Vercel shows the exact DNS records to add. Copy them into your
  registrar. Propagation is usually minutes, occasionally a few hours.

Add both `simpletech.com` and `www.simpletech.com`; Vercel will redirect one to the
other. SSL is automatic — never pay anyone for a certificate.

### 6. Update three files with the real domain

Easy to forget, and all three affect how the site behaves in the wild:

| File | What to change |
| --- | --- |
| `astro.config.mjs` | `site: 'https://yourdomain.com'` |
| `src/data/site.ts` | `company.domain` |
| `public/robots.txt` | the `Sitemap:` line |

These control the canonical URL and the link preview card that shows when someone
pastes your URL into Slack, WhatsApp, or LinkedIn. Wrong values mean the preview
points at `example.com`.

Then `git push`, and Vercel redeploys on its own.

### After the domain exists

Set up `hello@simpletech.com` (Google Workspace ~$7/user/month, or Zoho Mail has a
free tier) and swap it into `company.email`. The Gmail is fine while leads come
from people who already know you. It stops being fine the moment a stranger is
deciding whether you are a real company.

## What is deliberately not here

- **No contact form.** The calculator CTA does the qualifying a form would have
  done. If you want a real form later, Netlify Forms needs no backend.
- **No analytics.** Add Plausible or Fathom with one script tag in
  `src/layouts/Base.astro`. Worth doing once campaigns are running — you will want
  to know whether clickers read or bounce.
- **No dark mode.** Marketing sites are near-universally light, and it halves the
  surface area for visual bugs.
